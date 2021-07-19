import React, { useState } from 'react';
import { connect } from 'umi';
import { Input, Select, Alert } from 'antd';
const { Option } = Select;
import { PageContainer } from '@ant-design/pro-layout';
import TokenSwapContract from "../contracts/TokenSwap.json";
import YARATokenContract from "../contracts/YARAToken.json";
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
  const [selectedToken, setSelectedToken] = useState('eth');
  const [selectedAmount, setSelectedAmount] = useState(0);
  const [transferAmount, setTransferAmount] = useState(0);
  const [showInfo, setShowInfo] = useState("");

  const handleChange = (obj) => {
    setSelectedToken(obj);
    setTransferAmount(obj === 'eth' ? selectedAmount * 3000 : selectedAmount);
  }

  const handleAmountChange = (e) => {
    const { value } = e.target;
    setSelectedAmount(value);
    setTransferAmount(selectedToken === 'eth' ? value * 3000 : value);
  }

  const menu = (
    <Select 
      value={selectedToken} 
      style={{ minWidth: 120 }}
      onChange={handleChange} 
      dropdownClassName="token-select"
      dropdownMatchSelectWidth={300}
    >
      <Option value="eth">ETH</Option>
      <Option value="usdt">USDT</Option>
      <Option value="uni">UNI</Option>
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
    if (web3 && address) {

      const networkId = await web3.eth.net.getId();
      const deployedNetwork = TokenSwapContract.networks[networkId];
      const swapAddress = deployedNetwork.address;
      const tokenAddress = deployedNetwork.address;
      const contract = new web3.eth.Contract(
        TokenSwapContract.abi,
        swapAddress,
      );

      const deployedTokenNetwork = YARATokenContract.networks[networkId];
      const tokenContract = new web3.eth.Contract(
        YARATokenContract.abi,
        tokenAddress,
      );

      if (selectedToken === 'eth') {
        contract.methods.swapETH().send({ from: address, value: web3.utils.toWei(selectedAmount.toString(), "ether") }, function(error, transactionHash){ 
          if (error) {
            console.log(error + '!!!!');
          } else {
            console.log(transactionHash + '......');
          }
        });
      } else {
        tokenContract.methods.approve(swapAddress, web3.utils.toWei(selectedAmount.toString(), "ether")).send({ from: address }, function(error, transactionHash){ 
          if (error) {
            console.log(error + '!!!!');
          } else {
            console.log(transactionHash + '......');
  
            contract.methods.swapOtherTokens(tokenAddress, selectedAmount).send({ from: address }, function(error, transactionHash){ 
              if (error) {
                console.log(error + '???????');
              } else {
                console.log(transactionHash + ',,,,,,,,');
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
        {showInfo === 'success' && <Alert message="Success Tips" type="success" showIcon />}
        {showInfo !== 'success' && showInfo.length > 0 && <Alert message="Error" type="error" showIcon />}
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
            addonAfter="SLG"
            value={transferAmount}
          />
          <div className="swap-button" onClick={() => swap()}>Swap</div> 
      </div>
    </div>
  </PageContainer>;
};

export default connect(({ global }: ConnectState) => ({
  global: global,
}))(SwapPage);