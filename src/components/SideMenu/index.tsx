import React from 'react';
import { Menu } from 'antd';
import { Link, withRouter } from 'umi';
import indexIcon from '../../assets/index-icon.png';
import farmIcon from '../../assets/farm-icon.png';
import swapIcon from '../../assets/swap-icon.png';
import indexActiveIcon from '../../assets/index-icon-active.png';
import swapActiveIcon from '../../assets/swap-icon-active.png';
import logo from '../../assets/logo.svg';
import styles from './index.less';

type SideMenuProps = {
  location: Object;
};

const SideMenu: React.FC<SideMenuProps> = (props: SideMenuProps) => {

  var skeys: Array<string> = [];
  const path: string = props.location['pathname'].replace('/app/', '');
  skeys.push(path);

  return (
    <div className={styles.appSideBar + " app-side-bar"}>
      <Link to="/"><img alt="logo" className={styles.logo} src={logo} /></Link>
      <Menu
        className={styles.sideMenu}
        defaultSelectedKeys={skeys}
        mode="inline"
      >
        <Menu.Item key="index"><Link to="/app/index">
          <img className="normal-icon" src={indexIcon} />
          <img className="active-icon" src={indexActiveIcon} /> Index
        </Link></Menu.Item>
        <Menu.Item key="swap"><Link to="/app/swap">
          <img className="normal-icon" src={swapIcon} />
          <img className="active-icon" src={swapActiveIcon} /> Swap
        </Link></Menu.Item>
        <Menu.Item key="farm"><Link to="/coming-soon">
          <img className="normal-icon" src={farmIcon} /> Farm
        </Link></Menu.Item>
      </Menu>
    </div>
  );
};

export default withRouter(SideMenu);
