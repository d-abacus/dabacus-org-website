import React, { useState } from 'react';
import { Menu, Affix, Popover, Row, Col } from 'antd';
import { Link, withRouter } from 'umi';
import { useWallet } from 'use-wallet'
import logo from '../../assets/logo.png';
import styles from './index.less';
import './menu.less';
import ThemeButton from '../ThemeButton';
import CustomIcon from '../CustomIcon';
import earthIcon from '../../assets/ic_round-language.png';
import metamaskIcon from '../../assets/metamask.svg';
import walletConnectIcon from '../../assets/walletconnect-logo.svg';



const { SubMenu } = Menu;

type HeaderProps = {
  location: Object;
};

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {

  const [top, setTop] = useState(0);
  const wallet = useWallet()

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
  console.log(path);
  const isApp: boolean = path.indexOf('app') == 0;

  const connectWallet = (walletType: string) => {
    if (walletType.length > 0) {
      wallet.connect(walletType);
    } else {
      wallet.connect();
    }
  }

  const walletSelections = (
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
      <Col span={24}><button onClick={() => wallet.reset()}>disconnect</button></Col>
    </Row>
  );

  return (
    <Affix offsetTop={top}>
    <div className={styles.header + (isApp ? (" " + styles.appPageHeader) : '')}>
      <Link className={isApp ? 'hide-app show-app-mobile' : ''} to="/"><img alt="logo" className={styles.logo} src={logo} /></Link>
        <Menu className={styles.pageMenu} mode="horizontal" selectedKeys={skeys}>
        <SubMenu className={isApp ? 'hide-app' : ''} key="community" title="Community">
        <Menu.Item key="announcements"><Link to="/announcements"><span className="menu-item-span">Announcements</span></Link></Menu.Item>
          <Menu.Item key="community:1"><span className="menu-item-span">Snapshot</span></Menu.Item>
          <Menu.Item key="community:2"><span className="menu-item-span">Medium</span></Menu.Item>
          <Menu.Item key="community:3"><span className="menu-item-span">Discord</span></Menu.Item>
        </SubMenu>
        <SubMenu className={isApp ? 'hide-app' : ''} key="developers" title="Developers">
          <Menu.Item key="road-map">
            <Link to="/road-map"><span className="menu-item-span">Road Map</span></Link>
          </Menu.Item>
          <Menu.Item key="developers:1"><span className="menu-item-span">Docs</span></Menu.Item>
          <Menu.Item key="developers:2"><span className="menu-item-span">Github</span></Menu.Item>
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
          <Menu.Item key="products:3"><span className="menu-item-span">Exchange</span></Menu.Item>
        </SubMenu>
        <Menu.Item className={isApp ? 'hide-app' : ''} key="useApp">
          <Link to="/app/index"><ThemeButton>The Unit</ThemeButton></Link>
        </Menu.Item>
        <Menu.Item className={isApp ? 'hide-other show-app' : 'hide-other'} key="connectWallet">
        {wallet.status === 'connected' ? (
          <div className={styles.walletAccount}>{wallet.account}</div>
          ) : (
          <Popover overlayClassName="connectWalletContainer" placement="bottomRight" title="Select a wallet" content={walletSelections} trigger="click">
              <div className={styles.connectWallet}>{wallet.error}</div>
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
