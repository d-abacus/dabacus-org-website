import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ThemeButton from '../components/ThemeButton';
import styles from './Welcome.less';
import { Row, Col } from 'antd';
import { Link } from 'umi';
import trustlessImg from '../assets/Trustless.png';
import secureImg from '../assets/Secure.png';
import scalableImg from '../assets/Scalable.png';
import verifiableImg from '../assets/Verifiable.png';
import permissionlessImg from '../assets/Permissionless.png';
import openImg from '../assets/Open.png';
import discord from '../assets/discord-normal.png';
import medium from '../assets/medium-normal.png';
import snapshot from '../assets/snapshot-normal.png';
import wechat from '../assets/wechat-normal.png';
import discordActive from '../assets/discord-active.png';
import mediumActive from '../assets/medium-active.png';
import snapshotActive from '../assets/snapshot-active.png';
import wechatActive from '../assets/wechat-active.png';
import gif1 from '../assets/gif1.gif';
import gif2 from '../assets/gif2.gif';
import gif3 from '../assets/gif3.gif';
import bgdImg from '../assets/bgd-img.png';
import shortLine from '../assets/short-line.png';
import longLine from '../assets/long-line.png';
import Fade from 'react-reveal/Fade';



const features: Array<string> = [
  "Trustless", "Scalable", "Open", "Secure", "Verifiable", "Permissionless"
];
const featureDesc: Array<string> = [
  "dAbacus has no trusted central party.", 
  "Our new blocktree architecture allows unbounded on-chain scaling.", 
  "dAbacus will remain open for participants to join the network by performing physical permissionless work (PoW) instead of virtual permissioned ownership (PoS).", 
  "dAbacus will be backed by Proof-of-Work, tested and proven to be the highest level of ledger security for an open distributed ledger.", 
  "All code and transaction data is entirely independently verifiable.", 
  "dAbacus allows everyone to participate as equals."
];
const featuresImg: Array<string> = [
  trustlessImg, scalableImg, openImg, verifiableImg, secureImg, permissionlessImg
];


export default (): React.ReactNode => {

  return (
    <PageContainer>
      <img className={styles.bgdImg} src={bgdImg} />

      <Row align="middle">
        <Col sm={24} md={14}>
          <div className={styles.title + " hide-mobile"}>
            The BlockTree: A Layer-One
            <span className={styles.titleSpan}> Supernet </span> 
            Designed for the Metaverse
          </div>
          <div className={styles.title + " show-mobile"}>
            The BlockTree: An Layer-One <br/>
            <span className={styles.titleSpan}>Supernet </span> 
            Designed for the Metaverse
          </div>
          <img className={styles.featureGif + " show-mobile"} src={gif1} />
          <p className={styles.p + " " + styles.topPara}>A post-blockchain next-level organism for Edge Decentralized Applications. dAbacus achieves consensus with the lowest latency and the highest throughput thanks to its Blocktree ledger structure and its focus on post-quantum cryptography.</p>
          <Link to='/about'><ThemeButton>About</ThemeButton></Link>
        </Col>
        <Col xs={0} sm={0} md={10}>
          <img className={styles.featureGif + " " + styles.topGif} src={gif1} />
        </Col>
      </Row>

      <Fade bottom cascade>
      <Row className={styles.features} gutter={{xs: 13, sm: 13}}>
        {features.map((row: string, index: number) => 
          <Col xs={12} sm={12} md={8} className={styles.feature}>
            <div className={styles.allFeaturesWrapper}>
              <div><img className={styles.featureImg} src={featuresImg[index]} /></div>
              <div className={styles.featureTitle}>{row}</div>
              <div className={styles.featureDesc}>{featureDesc[index]}</div>
            </div>
          </Col>
         )}
      </Row>
      </Fade>

      <Fade bottom cascade>
      <div className={styles.lineWrapper}>
        <img className={styles.firstLine} src={shortLine} />
      </div>
      </Fade>

      <Fade bottom cascade>
      <Row className={styles.halfFeature} align="middle">
      <Col xs={24} sm={24} md={12} order={2}>
        <img className={styles.featureGif} src={gif2} />
      </Col>
      <Col xs={24} sm={24} md={12} order={1}>
        <div className={styles.halfFeatureWrapper}>
        <div className={styles.subtitle}>Building<span className={styles.titleSpan}> the World’s Accounting </span>Machine</div>
        <div className={styles.subtitleDesc + " hide-mobile"}>dAbacus technology empowers the ABA currency to revolutionize the way we transfer and store value in the post-quantum era.</div>
        <div className={styles.subtitleDesc + " show-mobile"}>dAbacus technology empowers the ABA currency to revolutionize the way we transfer and store value in the <br/>post-quantum era.</div>
        </div>
      </Col>
      </Row>
      </Fade>

      <Fade bottom cascade>
      <div className={styles.lineWrapper}>
        <img className={styles.secondLine} src={longLine} />
      </div>
      </Fade>

      <Fade bottom cascade>
      <Row className={styles.halfFeature} align="middle">
        <Col xs={24} sm={24} md={12}>
          <div className={styles.halfFeatureWrapperLeft}>
            <div className={styles.subtitle + " hide-mobile"}>The Unit: A crypto-native<span className={styles.titleSpan}> Unit </span>of Account</div>
            <div className={styles.subtitle + " show-mobile"}>The Unit: A crypto-native<span className={styles.titleSpan}> Unit</span><br />of Account</div>
            <div className={styles.subtitleDesc + " " + styles.subtitleLeft + " hide-mobile"}>Our comprehensive community-managed crypto-native index tied to global population data, The Unit, aims to become the unit of account of the Metarverse.</div>
            <div className={styles.subtitleDesc + " " + styles.subtitleLeft + " show-mobile"}>Our comprehensive community-managed crypto-native index tied to global population data, The Unit, aims to replace the unit of account <br/>of the Metarverse.</div>
            <Link to='/app/index'><ThemeButton>The Unit</ThemeButton></Link>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12}>
          <img className={styles.featureGif + " " + styles.bottomGif} src={gif3} />
        </Col>
      </Row>
      </Fade>

      <Fade bottom cascade>
      <div className={styles.lineWrapper}>
        <img className={styles.thirdLine} src={shortLine} />
      </div>
      </Fade>

      <Fade bottom cascade>
      <Row>
        <Col span={24}><div className={styles.subtitle + " " + styles.communityTitle}>Community</div></Col>
        <Col xs={12} sm={12} md={6} className={styles.communityImg}>
          <img src={snapshot} />
          <img src={snapshotActive} className={styles.activeSocial} />
        </Col>
        <Col xs={12} sm={12} md={6} className={styles.communityImg}>
          <img src={medium} />
          <img src={mediumActive} className={styles.activeSocial} />
        </Col>
        <Col xs={12} sm={12} md={6} className={styles.communityImg}>
          <img src={discord} />
          <img src={discordActive} className={styles.activeSocial} />
        </Col>
        <Col xs={12} sm={12} md={6} className={styles.communityImg}>
          <img src={wechat} />
          <img src={wechatActive} className={styles.activeSocial} />
        </Col>
      </Row>
      </Fade>


    </PageContainer>
  );
};
