import React, { useState } from 'react';
import { connect } from 'umi';
import { Input, Select, notification } from 'antd';
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
  const [selectedToken, setSelectedToken] = useState(0);
  const [loading, setLoading] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(0);
  const [transferAmount, setTransferAmount] = useState(0);

  const openNotification = (type: string, msg: string) => {
    notification[type]({
      message: msg,
      description:
        '',
    });
  };

  const handleChange = (obj: string) => {
    setSelectedToken(parseInt(obj));
    setTransferAmount(obj === '0' ? selectedAmount * 30000 : selectedAmount * 200);
  }

  const handleAmountChange = (e) => {
    const { value } = e.target;
    setSelectedAmount(value);
    setTransferAmount(selectedToken == 0 ? value * 30000 : value * 200);
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
        <Option key={index} value={index.toString()}>{token.symbol} - {token.name}</Option>
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

  const swap = async () => {
    if (web3 && address && !loading) {
      setLoading(true);

      const networkId = await web3.eth.net.getId();
      const deployedNetwork = TokenSwapContract.networks[networkId];
      const swapAddress = deployedNetwork.address;
      const tokenAddress = RINKEBY_TOKEN_LIST[selectedToken].address;
      const contract = new web3.eth.Contract(
        TokenSwapContract.abi,
        swapAddress,
      );

      if (selectedToken == 0) {
        contract.methods.swapETH().send({ from: address, value: web3.utils.toWei(selectedAmount.toString(), "ether") }, function(error, transactionHash){ 
          setLoading(false);
          if (error) {
            openNotification('error', error);
          } else {
            openNotification('success', "Transaction sent");
          }
        });
      } else {

        const tokenContract = new web3.eth.Contract(
          ERC20_ABI,
          tokenAddress,
        );
  
        const balance = await tokenContract.methods.balanceOf(address).call({from: address});
        console.log(balance);
        if (parseFloat(web3.utils.fromWei(balance)) < selectedAmount) {
          openNotification('error', "You do not have enough balance to swap");
          setLoading(false);
          return;
        }

        tokenContract.methods.approve(swapAddress, web3.utils.toWei(selectedAmount.toString(), "ether")).send({ from: address }, function(error, transactionHash){ 
          if (error) {
            setLoading(false);
            openNotification('error', error);
          } else {
  
            contract.methods.swapOtherTokens(tokenAddress, selectedAmount).send({ from: address }, function(error, transactionHash){ 
              setLoading(false);
              if (error) {
                openNotification('error', error);
              } else {
                openNotification('success', "Transaction sent");
              }
            });
          }
        });
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
          <div className="swap-button" onClick={() => swap()}>{loading ? (<LoadingOutlined />) : (<span>Swap</span>)}</div> 
      </div>
    </div>
  </PageContainer>;
};

export default connect(({ global }: ConnectState) => ({
  global: global,
}))(SwapPage);