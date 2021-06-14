import React, { useState, useEffect } from 'react';
import { Menu, Affix, Popover, Row, Col } from 'antd';
import { Link, withRouter } from 'umi';
import { useWallet } from 'use-wallet'
import Cookies from 'universal-cookie';
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
};

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {

  const [top, setTop] = useState(0);
  const originalCopyText: string = 'Copy address';
  const [copyText, setCopyText] = useState(originalCopyText);
  var wallet;

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

  if (isApp) {
     wallet = useWallet();
  }

  const resetCopyText = () => {
    setCopyText(originalCopyText);
  }

  const shorten = (address: string) => {
    if (address && address.length > 12) {
      return address.slice(0, 5) + '...' + address.slice(address.length-5, address.length);
    }
    return address;
  }

  const connectWallet = (walletType: string) => {
    const cookies = new Cookies();
    if (walletType.length > 0) {
      wallet.connect(walletType);
      cookies.set('wallet', walletType, { path: '/' });
    } else {
      wallet.connect();
      cookies.set('wallet', 'metamask', { path: '/' });
    }
  }

  const walletSelections = wallet != null && wallet.status === 'connecting' ? (
      <div className={styles.connectingInfo}>Connecting</div>
      ) : (
      <Row gutter={24}>
        <Col span={12}>
          <div className={styles.walletWrapper} onClick={() => connectWallet('')}>
            <img src={metamaskIcon} />
            MetaMask
            <div className={styles.connectBtn}>
              Connect
            </div>
          </div>
        </Col>
        <Col span={12}>
          <div className={styles.walletWrapper} onClick={() => connectWallet('walletconnect')}>
            <img className={styles.walletConnectLogo} src={walletConnectIcon} />
            WalletConnect
            <div className={styles.connectBtn}>
              Connect
            </div>
          </div>
        </Col>
      </Row>
     );

  const myWallet = wallet != null ? (
      <div className={styles.myWalletWrapper}>
        <div className={styles.ethBalance}>
          <img src={ethIcon} /> Etherum Balance ({shorten(wallet.account)})
        </div>
        <div className={styles.myBalance}><span className={styles.myBalanceNum}>{wallet.balance}</span> ETH</div>
        <div className={styles.copyAddress} onClick={() => {
          navigator.clipboard.writeText(wallet.account);
          setCopyText('Copied!');
          setTimeout(resetCopyText, 1200);
        }}>
          <img src={copyAddressIcon} /> {copyText}
        </div>
        <div className={styles.changeWallet} onClick={() => wallet.reset()}>
          <img src={myWalletIcon} /> Change wallet
        </div>
      </div>
     ) : (
      <div className={styles.myWalletWrapper}>
        Wallet Connection Error
      </div>
     );


  useEffect(() => {
    if (isApp && wallet) {
      const cookies = new Cookies();
      const w = cookies.get('wallet');
      if (w) {
        if (w === 'metamask') {
          wallet.connect();
        } else {
          wallet.connect(w);
        }
      }
    }
  }, []);

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
          <Menu.Item key="products:1"><span className="menu-item-span">The Unit White Paper</span></Menu.Item>
          <Menu.Item key="products:3">
          <Link to="/app/swap"><span className="menu-item-span">Swap</span></Menu.Item>
        </SubMenu>
        <Menu.Item className={isApp ? 'hide-app' : ''} key="useApp">
          <Link to="/app/index"><ThemeButton>The Unit</ThemeButton></Link>
        </Menu.Item>
        <Menu.Item className={isApp ? 'hide-other show-app' : 'hide-other'} key="connectWallet">
        {wallet != null && wallet.status === 'connected' ? (
          <Popover overlayClassName="myWalletContainer" placement="bottomRight" title="" content={myWallet} trigger="click">
              <div className={styles.walletAccount}>{shorten(wallet.account)}</div>
          </Popover>
          ) : (
          <Popover overlayClassName="connectWalletContainer" placement="bottomRight" title="Select a wallet" content={walletSelections} trigger="click">
              <div className={styles.connectWallet}>Connect Wallet</div>
          </Popover>
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

export default withRouter(Header);
