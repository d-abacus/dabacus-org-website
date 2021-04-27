import React, { useState } from 'react';
import { Menu, Affix } from 'antd';
import { Link, withRouter } from 'umi';
import indexIcon from '../../assets/index-icon.png';
import farmIcon from '../../assets/farm-icon.png';
import swapIcon from '../../assets/swap-icon.png';
import logo from '../../assets/logo.svg';
import styles from './index.less';

type SideMenuProps = {
  location: Object;
};

const SideMenu: React.FC<SideMenuProps> = (props: SideMenuProps) => {

  const [top, setTop] = useState(0);

  var skeys: Array<string> = [];
  const path: string = props.location['pathname'].replace('/app/', '');
  skeys.push(path);

  return (
    <Affix offsetTop={top} className={styles.appSideBar}>
      <Link to="/"><img alt="logo" className={styles.logo} src={logo} /></Link>
      <Menu
        className={styles.sideMenu}
        defaultSelectedKeys={skeys}
        mode="inline"
      >
        <Menu.Item key="index"><Link to="/app/index"><img src={indexIcon} /> Index</Link></Menu.Item>
        <Menu.Item key="swap"><Link to="/app/swap"><img src={swapIcon} /> Swap</Link></Menu.Item>
        <Menu.Item key="farm"><Link to="/coming-soon"><img src={farmIcon} /> Farm</Link></Menu.Item>
      </Menu>
    </Affix>
  );
};

export default withRouter(SideMenu);
