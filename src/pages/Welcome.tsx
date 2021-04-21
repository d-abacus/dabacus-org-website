import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import ThemeButton from '../components/ThemeButton';
import styles from './Welcome.less';
import { Row, Col } from 'antd';
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
  "Dabacus has no trusted central party.", 
  "Our new blocktree architecture allows unbounded on-chain scaling.", 
  "Dabacus will remain open for participants to join the network by performing physical permissionless work (PoW) instead of through virtual permissioned ownership (PoS).", 
  "Dabacus will be backed by Proof-of-Work, tested and proven to be the highest level of ledger security for an open distributed ledger.", 
  "All code and transaction data is fully independently verifiable.", 
  "Dabacus allows everyone to participate as equals."
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
          <div className={styles.title}>
            An Interstellar 
            <span className={styles.titleSpan}> Supernet </span> 
            for Edge Decentralized Applications
          </div>
          <img className={styles.featureGif + " show-mobile"} src={gif1} />
          <p className={styles.p + " " + styles.topPara}>Our network of networks aims at achieving consensus throughout 
            the Milky Way and beyond thanks to our Blocktree ledger structure and 
            our focus on post-quantum cryptography.</p>
          <ThemeButton>Use App</ThemeButton>
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
        <div className={styles.subtitleDesc}>Dabacus community-run technology powers the ABA currency to revolutionize the way we transfer and store value in the post-quantum era.</div>
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
            <div className={styles.subtitle + " hide-mobile"}>A crypto-native<span className={styles.titleSpan}> Unit </span>of Account</div>
            <div className={styles.subtitle + " show-mobile"}>A crypto-native<span className={styles.titleSpan}> Unit</span><br />of Account</div>
            <div className={styles.subtitleDesc + " " + styles.subtitleLeft}>Our comprehensive community managed crypto index tied to global population data aims to replace the USD as the World Unit of Account.</div>
            <ThemeButton>Use Index</ThemeButton>
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
      <div className={styles.subtitle + " " + styles.communityTitle}>Community</div>
      <Row>
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
