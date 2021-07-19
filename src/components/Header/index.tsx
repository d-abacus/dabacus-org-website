import React, { useState, useEffect } from 'react';
import { Menu, Affix, Popover, Row, Col } from 'antd';
import { Link, withRouter, connect } from 'umi';
import type { GlobalModelState } from '@/models/global';
import type { ConnectState } from '@/models/connect';
import type { Dispatch } from 'umi';
import Web3 from "web3";
import getWeb3 from "../../utils/getWeb3";
import logo from '../../assets/logo.png';
import styles from './index.less';
import './menu.less';
import ThemeButton from '../ThemeButton';
import CustomIcon from '../CustomIcon';
import earthIcon from '../../assets/ic_round-language.png';
import metamaskIcon from '../../assets/metamask.svg';
import walletConnectIcon from '../../assets/walletconnect-logo.svg';
import ethIcon from '../../assets/eth-icon.png';
import myWalletIcon from '../../assets/my-wallet.png';
import copyAddressIcon from '../../assets/copy-address.png';


const { SubMenu } = Menu;

type HeaderProps = {
  location: Object;
  global: GlobalModelState;
  dispatch: Dispatch;
};

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {

  const [top, setTop] = useState(0);
  const originalCopyText: string = 'Copy address';
  const [copyText, setCopyText] = useState(originalCopyText);
  const [myBalance, setMyBalance] = useState('0');

  var skeys: Array<string> = [];
  const path: string = props.location['pathname'].substring(1);
  if (path.indexOf('about') > -1 || path.indexOf('glossary') > -1 || 
      path.indexOf('faq') > -1 || path.indexOf('philosophy') > -1) {
    skeys.push('learn');
  }
  if (path.indexOf('announcements') > -1) {
    skeys.push('community');
  }
  skeys.push(path);
  skeys.push('english');
  const isApp: boolean = path.indexOf('app') == 0;

  const resetCopyText = () => {
    setCopyText(originalCopyText);
  }

  const { global, dispatch } = props;

  const shorten = (address: string) => {
    if (address && address.length > 12) {
      return address.slice(0, 5) + '...' + address.slice(address.length-5, address.length);
    }
    return address;
  }

  useEffect(() => {
    if (isApp) {
      if (global.web3Modal?.cachedProvider) {
        dispatch({
          type: 'global/setupWeb3',
          payload: { },
        });
      }
    }
  }, []);

  const { web3, address } = global;

  const changeMyWallet = () => {
    dispatch({
      type: 'global/changeWeb3',
      payload: { },
    });
  }

  const onAddressOpen = async (visible: boolean) => {
    if (visible && web3 && address) {
      const bal = await web3.eth.getBalance(address);
      const wei = parseFloat(web3.utils.fromWei(bal)).toFixed(2);
      setMyBalance(wei.toString());
    }
  }

  const connectWallet = () => {
    dispatch({
      type: 'global/setupWeb3',
      payload: { },
    });
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
        <div className={styles.changeWallet} onClick={() => changeMyWallet()}>
          <img src={myWalletIcon} /> Change wallet
        </div>
      </div>
     ) : (
      <div className={styles.myWalletWrapper}>
        Wallet Connection Error
      </div>
     );

  return (
    <Affix offsetTop={top}>
    <div className={styles.header + (isApp ? (" " + styles.appPageHeader) : '')}>
      <Link className={isApp ? 'hide-app show-app-mobile' : ''} to="/"><img alt="logo" className={styles.logo} src={logo} /></Link>
        <Menu className={styles.pageMenu} mode="horizontal" selectedKeys={skeys}>
        <SubMenu className={isApp ? 'hide-app' : ''} key="community" title="Community">
        <Menu.Item key="announcements"><Link to="/announcements"><span className="menu-item-span">Announcements</span></Link></Menu.Item>
          <Menu.Item key="community:1"><span className="menu-item-span">Snapshot</span></Menu.Item>
          <Menu.Item key="community:2"><a href="https://medium.com/@dabacus" target="_blank"><span className="menu-item-span">Medium</span></a></Menu.Item>
          <Menu.Item key="community:3"><a href="https://discord.gg/ePdsHkw3GD" target="_blank"><span className="menu-item-span">Discord</span></a></Menu.Item>
        </SubMenu>
        <SubMenu className={isApp ? 'hide-app' : ''} key="developers" title="Developers">
          <Menu.Item key="road-map">
            <Link to="/road-map"><span className="menu-item-span">Road Map</span></Link>
          </Menu.Item>
          <Menu.Item key="developers:1"><span className="menu-item-span">Docs</span></Menu.Item>
          <Menu.Item key="developers:2"><a href="https://github.com/d-abacus" target="_blank"><span className="menu-item-span">Github</span></a></Menu.Item>
        </SubMenu>
        <SubMenu className={isApp ? 'hide-app' : ''} key="learn" title="Learn">
          <Menu.Item key="about">
            <Link to="/about"><span className="menu-item-span">About</span></Link>
          </Menu.Item>
          <Menu.Item key="philosophy">
           <span className="menu-item-span">dAbacus' Values</span>
          </Menu.Item>
          <Menu.Item key="glossary">
            <Link to="/glossary"><span className="menu-item-span">Glossary</span></Link>
          </Menu.Item>
          <Menu.Item key="faq">
            <Link to="/faq"><span className="menu-item-span">FAQ</span></Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu className={isApp ? 'hide-app' : ''} key="applications" title="Applications">
          <Menu.Item key="products:2">
            <Link to="/app/index"><span className="menu-item-span">The Unit</span></Link>
          </Menu.Item>
          <Menu.Item key="products:1"><a href="https://api.dabacus.org/files/the_unit_paper.pdf" target="_blank"><span className="menu-item-span">The Unit White Paper</span></a></Menu.Item>
          <Menu.Item key="products:3">
          <Link to="/app/swap"><span className="menu-item-span">Swap</span></Link></Menu.Item>
        </SubMenu>
        <Menu.Item className={isApp ? 'hide-app' : ''} key="useApp">
          <Link to="/app/index"><ThemeButton>The Unit</ThemeButton></Link>
        </Menu.Item>
        <Menu.Item className={isApp ? 'hide-other show-app' : 'hide-other'} key="connectWallet">
        {web3 && address ? (
          <Popover overlayClassName="myWalletContainer" placement="bottomRight" title="" content={myWallet} trigger="click" onVisibleChange={onAddressOpen}>
              <div className={styles.walletAccount}>{shorten(address)}</div>
          </Popover>
          ) : (
            <div className={styles.connectWallet} onClick={connectWallet}>Connect Wallet</div>
         )
        }
        </Menu.Item>
        <SubMenu 
          className="language-menu" 
          icon={<CustomIcon imgSrc={earthIcon} size={20} />} 
          key="language" 
          title="English"
          popupClassName="language-popup"
        >
          <Menu.Item key="english"><span className="menu-item-span">English</span></Menu.Item>
          <Menu.Item key="chinese"><span className="menu-item-span">Chinese</span></Menu.Item>
          <Menu.Item key="spanish"><span className="menu-item-span">Spanish</span></Menu.Item>
        </SubMenu>
      </Menu>
    </div>
    </Affix>
  );
};

export default withRouter(connect(({ global }: ConnectState) => ({
  global: global,
}))(Header));
