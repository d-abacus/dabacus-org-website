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
import discord from '../assets/discord.png';
import medium from '../assets/medium.png';
import snapshot from '../assets/snapshot.png';
import wechat from '../assets/wechat.png';
import gif1 from '../assets/gif1.gif';
import gif2 from '../assets/gif2.gif';
import gif3 from '../assets/gif3.gif';
import bgdImg from '../assets/bgd-img.png';



const features: Array<String> = [
  "Trustless", "Scalable", "Open", "Secure", "Verifiable", "Permissionless"
];
const featureDesc: Array<String> = [
  "Dabacus has no trusted central party.", 
  "Our new blocktree architecture allows unbounded on-chain scaling.", 
  "Dabacus will remain open for participants to join the network by performing physical permissionless work (PoW) instead of through virtual permissioned ownership (PoS).", 
  "Dabacus will be backed by Proof-of-Work, tested and proven to be the highest level of ledger security for an open distributed ledger.", 
  "All code and transaction data is fully independently verifiable.", 
  "Dabacus allows everyone to participate as equals."
];
const featuresImg: Array<String> = [
  trustlessImg, scalableImg, openImg, verifiableImg, secureImg, permissionlessImg
];


export default (): React.ReactNode => {

  return (
    <PageContainer>
      <img className={styles.bgdImg} src={bgdImg} />

      <Row align="middle">
        <Col span={14}>
          <div className={styles.title}>
            An Interstellar 
            <span className={styles.titleSpan}> Supernet </span> 
            for Edge Decentralized Applications
          </div>
          <p className={styles.p}>Our network of networks aims at achieving consensus throughout 
            the Milky Way and beyond thanks to our Blocktree ledger structure and 
            our focus on post-quantum cryptography.</p>
          <ThemeButton>Use App</ThemeButton>
        </Col>
        <Col span={10}>
          <img className={styles.featureGif + " " + styles.topGif} src={gif1} />
        </Col>
      </Row>


      <Row className={styles.features}>
        {features.map((row: String, index: Number) => 
          <Col span={8} className={styles.feature}>
            <div><img className={styles.featureImg} src={featuresImg[index]} /></div>
            <div className={styles.featureTitle}>{row}</div>
            <div className={styles.featureDesc}>{featureDesc[index]}</div>
          </Col>
         )}
      </Row>

      <Row className={styles.halfFeature} align="middle">
      <Col span={12}>
          <img className={styles.featureGif} src={gif2} />
        </Col>
        <Col span={12}>
          <div className={styles.halfFeatureWrapper}>
          <div className={styles.subtitle}>Building<span className={styles.titleSpan}> the World’s Accounting </span>Machine</div>
          <div className={styles.subtitleDesc}>Dabacus community-run technology powers the ABA currency to revolutionize the way we transfer and store value in the post-quantum era.</div>
          </div>
        </Col>
      </Row>

      <Row className={styles.halfFeature} align="middle">
        <Col span={12}>
          <div className={styles.halfFeatureWrapperLeft}>
            <div className={styles.subtitle}>A crypto-native<span className={styles.titleSpan}> Unit </span>of Account</div>
            <div className={styles.subtitleDesc + " " + styles.subtitleLeft}>Our comprehensive community managed crypto index tied to global population data aims to replace the USD as the World Unit of Account.</div>
            <ThemeButton>Use Index</ThemeButton>
          </div>
        </Col>
        <Col span={12}>
          <img className={styles.featureGif + " " + styles.bottomGif} src={gif3} />
        </Col>
      </Row>

      <div className={styles.subtitle + " " + styles.communityTitle}>Community</div>
      <Row className={styles.communityImg}>
        <Col span={6}>
          <img src={snapshot} />
        </Col>
        <Col span={6}>
          <img src={medium} />
        </Col>
        <Col span={6}>
          <img src={discord} />
        </Col>
        <Col span={6}>
          <img src={wechat} />
        </Col>
      </Row>


    </PageContainer>
  );
};
