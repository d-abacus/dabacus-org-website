import React from 'react';
import { Menu } from 'antd';
import { Link, withRouter } from 'umi';
import indexIcon from '../../assets/index-icon.png';
import indexLightIcon from '../../assets/index-light-icon.png';
import farmIcon from '../../assets/farm-icon.png';
import swapIcon from '../../assets/swap-icon.png';
import swapLightIcon from '../../assets/swap-light-icon.png';
import farmLightIcon from '../../assets/farm-light-icon.png';
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
          <img className="light-icon" src={indexLightIcon} />
          <img className="normal-icon" src={indexIcon} />
          <img className="active-icon" src={indexActiveIcon} /> Index
        </Link></Menu.Item>
        <Menu.Item key="swap"><Link to="/app/swap">
          <img className="light-icon" src={swapLightIcon} />
          <img className="normal-icon" src={swapIcon} />
          <img className="active-icon" src={swapActiveIcon} /> Swap
        </Link></Menu.Item>
        <Menu.Item key="farm"><Link to="/coming-soon">
          <img className="light-icon" src={farmLightIcon} />
          <img className="normal-icon" src={farmIcon} /> Farm
        </Link></Menu.Item>
      </Menu>
    </div>
  );
};

export default withRouter(SideMenu);
