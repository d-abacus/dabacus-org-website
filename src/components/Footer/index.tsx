import React from 'react';

import styles from './index.less';
import { Row, Col } from 'antd';
import { Link } from 'umi';
import discord from '../../assets/discord-black.png';
import medium from '../../assets/medium-black.png';
import snapshot from '../../assets/snapshot-black.png';
import wechat from '../../assets/wechat-blakc.png';
import logo from '../../assets/logo.png';

const Footer: React.FC = () => {
  return <div className={styles.footer}>
  	<Row>
  		<Col xs={12} sm={12} md={4}>
  			<div className={styles.footerTitle}>Community</div>
        <Link to="/announcements">Announcements</Link>
  			<a href="#">Snapshot</a>
  			<a target="_blank" href="https://medium.com/@dabacus">Medium</a>
  			<a target="_blank" href="https://discord.gg/ePdsHkw3GD">Discord</a>
  		</Col>
  		<Col xs={12} sm={12} md={4}>
  			<div className={styles.footerTitle}>Developers</div>
        <Link to="/road-map">Road Map</Link>
  			<a href="#">Docs</a>
  			<a target="_blank" href="https://github.com/d-abacus">Github</a>
  		</Col>
  		<Col xs={12} sm={12} md={4}>
  			<div className={styles.footerTitle}>Learn</div>
        <Link to="/about">About</Link>
  			<a href="#">dAbacus’ Values</a>
  			<Link to="/glossary">Glossary</Link>
  			<Link to="/faq">FAQ</Link>
  		</Col>
  		<Col xs={12} sm={12} md={4}>
  			<div className={styles.footerTitle}>Applications</div>
  			<Link to="/app/index">The Unit</Link>
        <a href="#">The Unit White Paper</a>
  			<a href="/app/swap">Swap</a>
  		</Col>
  		<Col xs={24} sm={24} md={8}>
  			<Row className={styles.socialLinks}>
  				<Col span={6}><a href="#"><img src={snapshot} /></a></Col>
  				<Col span={6}><a href="#"><img src={medium} /></a></Col>
  				<Col span={6}><a href="#"><img src={discord} /></a></Col>
  				<Col span={6}><a href="#"><img src={wechat} /></a></Col>
  			</Row>
  		</Col>
  	</Row>
  	<img className={styles.logoImg} src={logo} />
  </div>;
};

export default Footer;
