import React from 'react';
import { PageLoading } from '@ant-design/pro-layout';
import type { ConnectProps } from 'umi';
import { connect } from 'umi';
import { Affix } from 'antd';
import type { ConnectState } from '@/models/connect';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import CustomTabBar from '../components/TabBar';
import styles from './AppLayout.less';
import '../components/AppHeader/menu.less';


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
        </div>
        
      </HelmetProvider>
    );
  }
}

export default connect(({ loading }: ConnectState) => ({
  loading: loading.models.user,
}))(MainLayout);
