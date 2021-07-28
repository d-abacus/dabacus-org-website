import React, { useState, useEffect } from 'react';
import { connect } from 'umi';
import { Input, Select, notification, Row, Col } from 'antd';
const { Option } = Select;
import ConnectWallet from '@/components/ConnectWallet';
import { PageContainer } from '@ant-design/pro-layout';
import { LoadingOutlined } from '@ant-design/icons';
import TokenSwapContract from "../contracts/TokenSwap.json";
import ERC20_ABI from "../contracts/erc20.json"
import { web3Constants } from '@/utils/web3Utils';
import RINKEBY_TOKEN_LIST from "../contracts/rinkeby-token-list.json"
import TOKEN_LIST from "../contracts/token-list.json"
import type { GlobalModelState } from '@/models/global';
import type { ConnectState } from '@/models/connect';
import './Swap.less';


type SwapProps = {
  global: GlobalModelState;
};

const SwapPage: React.FC<SwapProps> = (props: SwapProps) => {

  const { global } = props;
  const { web3, address } = global;
  const [ timer, setTimer ] = useState(null);
  const [selectedToken, setSelectedToken] = useState(0);
  const [loading, setLoading] = useState(false);
  const [approving, setApproving] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(0);
  const [confirmCounts, setConfirmCounts] = useState({});
  const [transferAmount, setTransferAmount] = useState(0);
  const [allowance, setAllowance] = useState(-1);
  const tokenOptions = web3Constants.networkId == 1 ? TOKEN_LIST : RINKEBY_TOKEN_LIST;
  const tokenSwapAddress = web3Constants.tokenSwapAddress;

  const openNotification = (type: string, msg: string) => {
    notification[type]({
      message: msg,
      description:
        '',
    });
  };

  const resetStates = () => {
    setSelectedToken(0);
    setLoading(false);
    setApproving(false);
    setSelectedAmount(0);
    setTransferAmount(0);
    setConfirmCounts({});
    setAllowance(-1);
  }

  const handleChange = (obj: string) => {
    const stoken = parseInt(obj);
    setSelectedToken(stoken);
    checkAllowance(stoken, selectedAmount);
  }

  const handleAmountChange = (e) => {
    const { value } = e.target;
    setSelectedAmount(value);
    if (timer) {
      clearTimeout(timer);
      setTimer(null);
    }
    const tmr = setTimeout(() => {
      checkAllowance(selectedToken, value);
    }, 800);
    setTimer(tmr);
  }

  const checkAllowance = async (stoken: number, samount: number) => {
    if (!web3 || !address) {
      return;
    }


    if (stoken == 0) {
      setTransferAmount(samount * 30000);
    } else if (samount > 0) {
      setAllowance(-1);
      const tokenAddress = tokenOptions[stoken].address;
      const tokenContract = new web3.eth.Contract(ERC20_ABI, tokenAddress);

      setLoading(true);

      const balance = await tokenContract.methods.balanceOf(address).call({from: address});
      if (fromWei(balance) < samount) {
        openNotification('error', "You do not have enough balance to swap");
        setLoading(false);
        return;
      }

      const allow = await tokenContract.methods.allowance(address, tokenSwapAddress).call({from: address});

      setAllowance(fromWei(allow));
      setLoading(false);
      setTransferAmount(samount * 200);
    }
  }

  const menu = (
    <Select 
      value={selectedToken.toString()} 
      style={{ minWidth: 120 }}
      onChange={handleChange} 
      dropdownClassName="token-select"
      dropdownMatchSelectWidth={300}
    >
      {tokenOptions.map((token, index) => 
        <Option key={index} value={index.toString()}>
          <Row justify="space-around" align="middle">
            <Col span={4}>
              <img width="18" src={token.logoURI} />
            </Col>
            <Col span={20}>
              <div className="token-symbol">{token.symbol}</div>
              <div className="token-name">{token.name}</div>
            </Col>
          </Row>
        </Option>
      )}
    </Select>
  );

  const approve = async () => {
    setApproving(true);
    const tokenAddress = tokenOptions[selectedToken].address;
    const tokenContract = new web3.eth.Contract(ERC20_ABI, tokenAddress);
    tokenContract.methods.approve(tokenSwapAddress, web3.utils.toWei(selectedAmount.toString(), "ether")).send({ from: address })
      .on('confirmation', function(confirmationNumber, receipt){
        var count = confirmCounts[receipt.transactionHash] ?? 0;
        count += 1;
        confirmCounts[receipt.transactionHash] = count;
        setConfirmCounts(confirmCounts);
        if (count == 2) {
          setApproving(false);
          openNotification('success', 'Approved!');
          setAllowance(selectedAmount);
        }
      })
      .on('error', function(error, receipt) { // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
        openNotification('error', error.message);
      });
  }

  const fromWei = (number: string): number => {
    return parseFloat(web3.utils.fromWei(number));
  } 

  const checkApprove = (): boolean => {
    return selectedToken > 0 && selectedAmount > 0 && allowance < selectedAmount && allowance > -1;
  }

  const swap = async () => {

    if (loading || checkApprove() || approving) {
      return;
    }

    const networkId = await web3.eth.net.getId();
    if (networkId != web3Constants.networkId) {
      openNotification('error', 'Currently swap only supports ' + (networkId == 1 ? 'mainnet' : 'rinkeby'));
      return;
    }

    if (selectedToken == 0 && selectedAmount < 0.1) {
      openNotification('error', 'Cannot swap less than 0.1 ETH');
      return;
    }

    if (selectedAmount < 1 && selectedToken > 0) {
      openNotification('error', 'Cannot swap less than 1 token');
      return;
    }

    if (allowance == -1 && selectedToken > 0) {
      checkAllowance(selectedToken, selectedAmount);
      return;
    }

    if (web3 && address) {
        setLoading(true);
        const contract = new web3.eth.Contract(TokenSwapContract.abi, tokenSwapAddress);

        if (selectedToken == 0) {
          const gasl = await contract.methods.swapETH().estimateGas({ from: address });
          contract.methods.swapETH().send({ from: address, gasLimit: gasl, value: web3.utils.toWei(selectedAmount.toString(), "ether") }, function(error, transactionHash){ 
            setLoading(false);
            if (error) {
              openNotification('error', error.message);
            } else {
              openNotification('success', "Transaction sent");
              resetStates();
            }
          });
        } else {
          const tokenAddress = tokenOptions[selectedToken].address;
          await checkAllowance(selectedToken, selectedAmount);
          const gasl = await contract.methods.swapOtherTokens(tokenAddress, selectedAmount).estimateGas({ from: address });
          contract.methods.swapOtherTokens(tokenAddress, selectedAmount).send({ from: address, gasLimit: gasl }, function(error, transactionHash){ 
            setLoading(false);
            if (error) {
              openNotification('error', error.message);
            } else {
              openNotification('success', "Transaction sent");
              resetStates();
            }
          });
        }

    } else {
      openNotification('error', 'You have to connect wallet first');
    }
  }

  const buttonGroup = () => {
    if (web3 && address) {
      return <>
        {checkApprove() && <div className="swap-button" onClick={() => approve()}>{approving ? (<LoadingOutlined />) : (<span>Approve</span>)}</div>}
          <div className={checkApprove() ? "swap-button with-approve" : "swap-button"} onClick={() => swap()}>{loading ? (<LoadingOutlined />) : (<span>Swap</span>)}</div> 
      </>
    }

    return <div className="connectWalletWrapper"><ConnectWallet fullwidth /></div>;
  }

  return <PageContainer>
    <div className="swap-page">
      <div className="swap-wrapper">
        <div className="swap-title">Swap</div>
        <div className="swap-subtitle">From</div>
          <Input
            type="number"
            className="swap-input"
            placeholder="0.0"
            addonAfter={menu}
            value={selectedAmount}
            onChange={handleAmountChange}
          />
        <div className="swap-subtitle">To</div>
        <Input
            className="swap-input"
            placeholder="0.0"
            disabled={true}
            addonAfter="dAbacus"
            value={transferAmount}
          />
          {buttonGroup()}
      </div>
    </div>
  </PageContainer>;
};

export default connect(({ global }: ConnectState) => ({
  global: global,
}))(SwapPage);