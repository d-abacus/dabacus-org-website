import React, { useState, useEffect } from 'react';
import type { GlobalModelState } from '@/models/global';
import type { ConnectState } from '@/models/connect';
import type { Dispatch } from 'umi';
import Web3 from "web3";
import Web3Modal from "web3modal";
import { providerOptions, web3Constants } from "../../utils/web3Utils";
import { connect } from 'umi';
import { Popover } from 'antd';
import styles from './index.less';
import '../Header/menu.less';
import ethIcon from '../../assets/eth-icon.png';
import myWalletIcon from '../../assets/my-wallet.png';
import copyAddressIcon from '../../assets/copy-address.png';


interface ConnectWalletProps {
  fullwidth: Boolean;
  global: GlobalModelState;
  dispatch: Dispatch;
};

const ConnectWallet: React.FC<ConnectWalletProps> = (props: ConnectWalletProps) => {
  const { global, dispatch } = props;
  const { web3, address } = global;
  const originalCopyText: string = 'Copy address';
  const [copyText, setCopyText] = useState(originalCopyText);
  const [myBalance, setMyBalance] = useState('');

  const web3Modal = new Web3Modal({
    network: web3Constants.networkId == 1 ? "mainnet" : "rinkeby",
    cacheProvider: true,
    providerOptions: providerOptions
  });

  useEffect(() => {
    if (web3Modal.cachedProvider) {
      onConnect();
    }
  }, []);

  const resetApp = async () => {
    const { web3 } = global;
    if (web3 && web3.currentProvider) {
      if (web3.currentProvider.disconnect) {
        await web3.currentProvider.disconnect();
      } else if (web3.currentProvider.close) {
        await web3.currentProvider.close();
      }
    }
    await web3Modal.clearCachedProvider();
    setMyBalance('');
    dispatch({
      type: 'global/saveWeb3',
      payload: { 
        web3: null,
        address: null
      },
    });
  };

  const subscribeProvider = async (provider: any) => {
    if (!provider.on) {
      return;
    }
    provider.on("close", () => resetApp());
    provider.on("disconnect", (error: { code: number; message: string }) => {
      resetApp();
    });
    provider.on("accountsChanged", async (accounts: string[]) => {
      dispatch({
        type: 'global/saveWeb3',
        payload: { 
          address: accounts[0]
        },
      });
    });
  };

  const changeWallet = async () => {
    await resetApp();
    onConnect();
  }

  const onOpen = async () => {
    const bal = await web3.eth.getBalance(address);
    setMyBalance(parseFloat(web3.utils.fromWei(bal)).toFixed(4).toString());
  }

  const onConnect = async () => {
    const provider = await web3Modal.connect();
    await subscribeProvider(provider);
    const web3: any = new Web3(provider);
    const accounts = await web3.eth.getAccounts();
    const addr = accounts[0];
    dispatch({
      type: 'global/saveWeb3',
      payload: { 
        web3: web3,
        address: addr
      },
    });
  };

  const resetCopyText = () => {
    setCopyText(originalCopyText);
  }

  const shorten = (addr: string) => {
    if (addr && addr.length > 12) {
      return addr.slice(0, 5) + '...' + addr.slice(addr.length-5, addr.length);
    }
    return addr;
  }

  const myWallet = web3 && address ? (
    <div className={styles.myWalletWrapper}>
      <div className={styles.ethBalance}>
        <img src={ethIcon} /> Etherum Balance <br/>
        <div style={{fontSize: '12px', marginLeft: '19px'}}>{address}</div>
      </div>
      <div className={styles.myBalance}><span className={styles.myBalanceNum}>{myBalance}</span> ETH</div>
      <div className={styles.copyAddress} onClick={() => {
        navigator.clipboard.writeText(address);
        setCopyText('Copied!');
        setTimeout(resetCopyText, 1200);
      }}>
        <img src={copyAddressIcon} /> {copyText}
      </div>
      <div className={styles.changeWallet} onClick={changeWallet}>
        <img src={myWalletIcon} /> Change wallet
      </div>
    </div>
   ) : (
    <div className={styles.myWalletWrapper}>
      Wallet Connection Error
    </div>
   );

  if (web3 && address) {
    return <Popover overlayClassName="myWalletContainer" placement="bottomRight" title="" content={myWallet} trigger="click" onVisibleChange={onOpen}>
              <div className={styles.walletAccount}>{shorten(address)}</div>
          </Popover>
  }

  return <div 
      className={props.fullwidth ? styles.connectWalletFull : styles.connectWallet} onClick={onConnect}
    >
      Connect Wallet
    </div>;
};

export default connect(({ global }: ConnectState) => ({
  global: global,
}))(ConnectWallet);
