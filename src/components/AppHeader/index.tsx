import React from 'react';
import { Menu } from 'antd';
import { Link, withRouter } from 'umi';
import logo from '../../assets/logo.svg';
import styles from './index.less';
import ThemeButton from '../ThemeButton';
import CustomIcon from '../CustomIcon';
import earthIcon from '../../assets/ic_round-language.png';
import '../Header/menu.less';


const { SubMenu } = Menu;

type AppHeaderProps = {
  location: Object;
};

const AppHeader: React.FC<AppHeaderProps> = (props: AppHeaderProps) => {
  var skeys: Array<string> = [];
  const path: string = props.location['pathname'].substring(1);
  skeys.push(path);
  skeys.push('english');

  return (
    <div className={styles.header}>
      <img alt="logo" className={styles.logo} src={logo} />

      <Menu className={styles.pageMenu} mode="horizontal" selectedKeys={skeys}>
        <Menu.Item key="useApp">
          <ThemeButton>Connect Wallet</ThemeButton>
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

export default withRouter(AppHeader);
