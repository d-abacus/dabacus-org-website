import React from 'react';
import { PageLoading } from '@ant-design/pro-layout';
import type { ConnectProps } from 'umi';
import { connect, Link } from 'umi';
import { Row, Col, Menu, Affix } from 'antd';
import type { ConnectState } from '@/models/connect';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './AppLayout.less';
import '../components/AppHeader/menu.less';
import indexIcon from '../assets/index-icon.png';
import farmIcon from '../assets/farm-icon.png';
import swapIcon from '../assets/swap-icon.png';
import logo from '../assets/logo.svg';


type MainLayoutProps = {
  loading?: boolean;
} & ConnectProps;

type MainLayoutState = {
  isReady: boolean;
  top: number;
  sideTop: number;
};

class MainLayout extends React.Component<MainLayoutProps, MainLayoutState> {
  state: MainLayoutState = {
    isReady: false,
    top: 0,
    sideTop: 0,
  };

  componentDidMount() {
    this.setState({
      isReady: true,
    });
  }

  render() {
    const { isReady, top, sideTop } = this.state;
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
          <Row className={styles.appContent}>
            <Col xs={0} sm={0} md={4} className={styles.appSideBar}>
              <Affix offsetTop={sideTop}>
                <Link to="/"><img alt="logo" className={styles.logo} src={logo} /></Link>
                <Menu
                  className={styles.sideMenu}
                  defaultSelectedKeys={['1']}
                  mode="inline"
                >
                  <Menu.Item key="1"><img src={indexIcon} /> Index</Menu.Item>
                  <Menu.Item key="2"><img src={swapIcon} /> Swap</Menu.Item>
                  <Menu.Item key="3"><img src={farmIcon} /> Farm</Menu.Item>
                </Menu>
              </Affix>
            </Col>
            <Col xs={24} sm={24} md={20}>
              <Affix offsetTop={top} className={styles.appHeader}>
                <Header />
              </Affix>
              <div className={styles.pageContentContainer}>
              { children }
              </div>
            </Col>
          </Row>
        </div>
      </HelmetProvider>
    );
  }
}

export default connect(({ loading }: ConnectState) => ({
  loading: loading.models.user,
}))(MainLayout);
