import React from 'react';
import { Menu } from 'antd';
import { Link, withRouter } from 'umi';
import logo from '../../assets/logo.svg';
import styles from './index.less';
import ThemeButton from '../ThemeButton';

const { SubMenu } = Menu;

type AppHeaderProps = {
  location: Object;
};

const AppHeader: React.FC<AppHeaderProps> = (props: AppHeaderProps) => {
  return (
    <div className={styles.header}>
      <img alt="logo" className={styles.logo} src={logo} />

      <Menu className={styles.pageMenu} mode="horizontal" selectedKeys={[props.location['pathname'].substring(1)]}>
        <Menu.Item key="useApp">
          <ThemeButton>Connect Wallet</ThemeButton>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default withRouter(AppHeader);
