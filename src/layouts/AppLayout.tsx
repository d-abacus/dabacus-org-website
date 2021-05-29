import React from 'react';
import { PageLoading } from '@ant-design/pro-layout';
import type { ConnectProps } from 'umi';
import { connect, Link } from 'umi';
import { Row, Col, Menu, Affix } from 'antd';
import type { ConnectState } from '@/models/connect';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { DrizzleContext } from '@drizzle/react-plugin'
import { UseWalletProvider } from 'use-wallet'
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import CustomTabBar from '../components/TabBar';
import styles from './AppLayout.less';
import '../components/AppHeader/menu.less';
//import JOJOToken from '../contracts/JOJOToken.json';
//import { Drizzle } from "@drizzle/store";


type MainLayoutProps = {
  loading?: boolean;
} & ConnectProps;

type MainLayoutState = {
  isReady: boolean;
  top: number;
};

class MainLayout extends React.Component<MainLayoutProps, MainLayoutState> {
  state: MainLayoutState = {
    isReady: false,
    top: 0,
  };

  componentDidMount() {
    this.setState({
      isReady: true,
    });
  }

  render() {
    const { isReady, top } = this.state;
    const { children, loading } = this.props;
    // const drizzleOptions = {
    //   web3: {
    //     block: false,
    //     fallback: {
    //       type: "ws",
    //       url: "ws://127.0.0.1:7545"
    //     }
    //   },
    //   contracts: [
    //    JOJOToken
    //   ],
    // };
    // const drizzle = new Drizzle(drizzleOptions);

    if (loading || !isReady) {
      return <PageLoading />;
    }
    return (
      <HelmetProvider>
        <Helmet>
          <title>DABACUS</title>
          <meta name="description" content="DABACUS" />
        </Helmet>

        
        <div className={styles.container}>
        <UseWalletProvider chainId={1} connectors={{
          walletconnect: { rpcUrl: 'https://mainnet.infura.io/v3/f875625f90da43609ae3a92d8de5dbe4' },
        }}>
          <SideMenu />
          <div className={styles.pageContentContainer}>
            <Affix offsetTop={top} className={styles.appHeader + " app-header"}>
              <Header />
            </Affix>
            <div className={styles.pageContentWrapper}>
            { children }
            </div>
            <div className={styles.tabBar}>
              <CustomTabBar>{ children }</CustomTabBar>
            </div>
          </div>
          </UseWalletProvider>
        </div>
        
      </HelmetProvider>
    );
  }
}

export default connect(({ loading }: ConnectState) => ({
  loading: loading.models.user,
}))(MainLayout);
