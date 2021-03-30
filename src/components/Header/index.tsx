import React from 'react';
import { Menu } from 'antd';
import { Link, withRouter } from 'umi';
import logo from '../../assets/logo.svg';
import styles from './index.less';
import './menu.less';


const { SubMenu } = Menu;

type HeaderProps = {
  location: Object;
};

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  return (
    <div className={styles.header}>
      <img alt="logo" className={styles.logo} src={logo} />

      <Menu className={styles.pageMenu} mode="horizontal" selectedKeys={[props.location['pathname'].substring(1)]}>
        <SubMenu key="community" title="Community">
          <Menu.Item key="community:1">Snapshot</Menu.Item>
          <Menu.Item key="community:2">Medium</Menu.Item>
          <Menu.Item key="community:3">Discord</Menu.Item>
          <Menu.Item key="community:4">Announcements</Menu.Item>
        </SubMenu>
        <SubMenu key="developers" title="Developers">
          <Menu.Item key="developers:1">Docs</Menu.Item>
          <Menu.Item key="developers:2">Github</Menu.Item>
          <Menu.Item key="developers:3">Road Map</Menu.Item>
        </SubMenu>
        <SubMenu key="learn" title="Learn">
          <Menu.Item key="learn:1">Dabacus' Philosophy</Menu.Item>
          <Menu.Item key="learn:2">
            <Link to="/about">About</Link>
          </Menu.Item>
          <Menu.Item key="learn:3">
            <Link to="/glossary">Glossary</Link>
          </Menu.Item>
          <Menu.Item key="learn:4">
            <Link to="/faq">FAQ</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="products" title="Products">
          <Menu.Item key="products:1">White Paper</Menu.Item>
          <Menu.Item key="products:2">World Unit of Account Index</Menu.Item>
          <Menu.Item key="products:3">Exchange</Menu.Item>
        </SubMenu>
        <Menu.Item key="useApp">
          Use App
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default withRouter(Header);
