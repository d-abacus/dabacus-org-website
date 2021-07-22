import React, { useState } from 'react';
import { connect } from 'umi';
import { Input, Select, notification, Row, Col } from 'antd';
const { Option } = Select;
import { PageContainer } from '@ant-design/pro-layout';
import { LoadingOutlined } from '@ant-design/icons';
import TokenSwapContract from "../contracts/TokenSwap.json";
import ERC20_ABI from "../contracts/erc20.json"
import RINKEBY_TOKEN_LIST from "../contracts/rinkeby-token-list.json"
import type { GlobalModelState } from '@/models/global';
import type { ConnectState } from '@/models/connect';
import type { Dispatch } from 'umi';

import './Swap.less';


type SwapProps = {
  global: GlobalModelState;
  dispatch: Dispatch;
};

const SwapPage: React.FC<SwapProps> = (props: SwapProps) => {

  const { global } = props;
  const { web3, address } = global;
  const [ timer, setTimer ] = useState(null);
  const [selectedToken, setSelectedToken] = useState(0);
  const [loading, setLoading] = useState(false);
  const [approving, setApproving] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(0);
  const [transferAmount, setTransferAmount] = useState(0);
  const [allowance, setAllowance] = useState(-1);

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
    setAllowance(-1);
  }

  const handleChange = (obj: string) => {
    const stoken = parseInt(obj);
    setSelectedToken(stoken);
    checkAllowance(stoken, selectedAmount);
  }

  const handleAmountChange = (e) => {
    if (timer) {
      clearTimeout(timer);
      setTimer(null);
    }
    const tmr = setTimeout(() => {
      const { value } = e.target;
      setSelectedAmount(value);
      checkAllowance(selectedToken, value);
    }, 800);
    setTimer(tmr);
  }

  const checkAllowance = async (stoken: number, samount: number) => {
    if (stoken == 0) {
      setTransferAmount(samount * 30000);
    } else if (samount > 0) {
      setAllowance(-1);
      const tokenAddress = RINKEBY_TOKEN_LIST[stoken].address;
      const tokenContract = new web3.eth.Contract(
        ERC20_ABI,
        tokenAddress,
      );

      const networkId = await web3.eth.net.getId();
      const deployedNetwork = TokenSwapContract.networks[networkId];
      const swapAddress = deployedNetwork.address;

      setLoading(true);

      const balance = await tokenContract.methods.balanceOf(address).call({from: address});
      if (fromWei(balance) < samount) {
        openNotification('error', "You do not have enough balance to swap");
        setLoading(false);
        return;
      }

      const allow = await tokenContract.methods.allowance(address, swapAddress).call({from: address});
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
      {RINKEBY_TOKEN_LIST.map((token, index) => 
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

  const setupWeb3 = async () => {
    const { dispatch } = props;
    dispatch({
      type: 'global/setupWeb3',
      payload: { },
    });
  }

  const approve = async () => {
    setApproving(true);
    const networkId = await web3.eth.net.getId();
    const deployedNetwork = TokenSwapContract.networks[networkId];
    const swapAddress = deployedNetwork.address;
    const tokenAddress = RINKEBY_TOKEN_LIST[selectedToken].address;
    const contract = new web3.eth.Contract(
      TokenSwapContract.abi,
      swapAddress,
    );
    const tokenContract = new web3.eth.Contract(
      ERC20_ABI,
      tokenAddress,
    );
    tokenContract.methods.approve(swapAddress, web3.utils.toWei(selectedAmount.toString(), "ether")).send({ from: address })
      .on('confirmation', function(confirmationNumber, receipt){
        openNotification('success', 'Approved!');
        setAllowance(selectedAmount);
      })
      .on('error', function(error, receipt) { // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
        openNotification('error', error);
      });
  }

  const fromWei = (number: string): number => {
    return parseFloat(web3.utils.fromWei(number));
  } 

  const checkApprove = (): boolean => {
    return selectedToken > 0 && selectedAmount > 0 && allowance < selectedAmount && allowance > -1;
  }

  const swap = async () => {

    if (selectedToken == 0 && selectedAmount < 0.1) {
      openNotification('error', 'Cannot swap less than 0.1 ETH');
      return;
    }

    if (selectedAmount < 1) {
      openNotification('error', 'Cannot swap less than 1 token');
      return;
    }

    const napprove = checkApprove();
    if (web3 && address) {
      if (!loading && !napprove) {
        setLoading(true);

        const networkId = await web3.eth.net.getId();
        const deployedNetwork = TokenSwapContract.networks[networkId];
        const swapAddress = deployedNetwork.address;
        const tokenAddress = RINKEBY_TOKEN_LIST[selectedToken].address;
        const contract = new web3.eth.Contract(
          TokenSwapContract.abi,
          swapAddress,
        );
        const tokenContract = new web3.eth.Contract(
          ERC20_ABI,
          tokenAddress,
        );

        if (selectedToken == 0) {
          contract.methods.swapETH().send({ from: address, value: web3.utils.toWei(selectedAmount.toString(), "ether") }, function(error, transactionHash){ 
            setLoading(false);
            if (error) {
              openNotification('error', error);
            } else {
              openNotification('success', "Transaction sent");
              resetStates();
            }
          });
        } else {

          await checkAllowance(selectedToken, selectedAmount);
          contract.methods.swapOtherTokens(tokenAddress, selectedAmount).send({ from: address }, function(error, transactionHash){ 
            setLoading(false);
            if (error) {
              openNotification('error', error);
            } else {
              openNotification('success', "Transaction sent");
              resetStates();
            }
          });
        }
      }

    } else {
      setupWeb3();
    }
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
          {checkApprove() && <div className="swap-button" onClick={() => approve()}>{approving ? (<LoadingOutlined />) : (<span>Approve</span>)}</div>}
          <div className={checkApprove() ? "swap-button with-approve" : "swap-button"} onClick={() => swap()}>{loading ? (<LoadingOutlined />) : (<span>Swap</span>)}</div> 
      </div>
    </div>
  </PageContainer>;
};

export default connect(({ global }: ConnectState) => ({
  global: global,
}))(SwapPage);