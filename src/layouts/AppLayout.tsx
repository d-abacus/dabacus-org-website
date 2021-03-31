import React from 'react';
import { PageLoading } from '@ant-design/pro-layout';
import type { ConnectProps } from 'umi';
import { connect } from 'umi';
import { Row, Col, Menu } from 'antd';
import type { ConnectState } from '@/models/connect';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import AppHeader from '../components/AppHeader';
import Footer from '../components/Footer';
import styles from './AppLayout.less';
import indexIcon from '../assets/index-icon.png';
import farmIcon from '../assets/farm-icon.png';
import swapIcon from '../assets/swap-icon.png';
import '../components/AppHeader/menu.less';


type MainLayoutProps = {
  loading?: boolean;
} & ConnectProps;

type MainLayoutState = {
  isReady: boolean;
};

class MainLayout extends React.Component<MainLayoutProps, MainLayoutState> {
  state: MainLayoutState = {
    isReady: false,
  };

  componentDidMount() {
    this.setState({
      isReady: true,
    });
  }

  render() {
    const { isReady } = this.state;
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
          <AppHeader />
          <Row className={styles.appContent}>
            <Col span={4}>
              <Menu
                className={styles.sideMenu}
                defaultSelectedKeys={['1']}
                mode="inline"
              >
                <Menu.Item key="1"><img src={indexIcon} /> Index</Menu.Item>
                <Menu.Item key="2"><img src={swapIcon} /> Swap</Menu.Item>
                <Menu.Item key="3"><img src={farmIcon} /> Farm</Menu.Item>
              </Menu>
            </Col>
            <Col span={20}>
              { children }
            </Col>
          </Row>
          <Footer />
        </div>
      </HelmetProvider>
    );
  }
}

export default connect(({ loading }: ConnectState) => ({
  loading: loading.models.user,
}))(MainLayout);
