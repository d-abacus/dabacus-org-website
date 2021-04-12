import React from 'react';
import { Menu } from 'antd';
import { Link, withRouter } from 'umi';
import logo from '../../assets/logo.svg';
import styles from './index.less';
import './menu.less';
import ThemeButton from '../ThemeButton';
import CustomIcon from '../CustomIcon';
import earthIcon from '../../assets/ic_round-language.png';



const { SubMenu } = Menu;

type HeaderProps = {
  location: Object;
};

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {

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

  return (
    <div className={styles.header}>
      <Link to="/"><img alt="logo" className={styles.logo} src={logo} /></Link>

      <Menu className={styles.pageMenu} mode="horizontal" selectedKeys={skeys}>
        <SubMenu key="community" title="Community">
          <Menu.Item key="community:1">Snapshot</Menu.Item>
          <Menu.Item key="community:2">Medium</Menu.Item>
          <Menu.Item key="community:3">Discord</Menu.Item>
          <Menu.Item key="announcements"><Link to="/announcements">Announcements</Link></Menu.Item>
        </SubMenu>
        <SubMenu key="developers" title="Developers">
          <Menu.Item key="developers:1">Docs</Menu.Item>
          <Menu.Item key="developers:2">Github</Menu.Item>
          <Menu.Item key="developers:3">
            <Link to="/road-map">Road Map</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="learn" title="Learn">
          <Menu.Item key="philosophy">
           Dabacus' Philosophy
          </Menu.Item>
          <Menu.Item key="about">
            <Link to="/about">About</Link>
          </Menu.Item>
          <Menu.Item key="glossary">
            <Link to="/glossary">Glossary</Link>
          </Menu.Item>
          <Menu.Item key="faq">
            <Link to="/faq">FAQ</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="products" title="Products">
          <Menu.Item key="products:1">White Paper</Menu.Item>
          <Menu.Item key="products:2">World Unit of Account Index</Menu.Item>
          <Menu.Item key="products:3">Exchange</Menu.Item>
        </SubMenu>
        <Menu.Item key="useApp">
          <Link to="/app/index"><ThemeButton>Use App</ThemeButton></Link>
        </Menu.Item>
        <SubMenu className="language-menu" icon={<CustomIcon imgSrc={earthIcon} size={20} />} key="language" title="English">
          <Menu.Item key="english">English</Menu.Item>
          <Menu.Item key="chinese">Chinese</Menu.Item>
          <Menu.Item key="spanish">Spanish</Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
};

export default withRouter(Header);
