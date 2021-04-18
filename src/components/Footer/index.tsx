import React from 'react';

import styles from './index.less';
import { Row, Col } from 'antd';
import discord from '../../assets/discord-black.png';
import medium from '../../assets/medium-black.png';
import snapshot from '../../assets/snapshot-black.png';
import wechat from '../../assets/wechat-blakc.png';
import logo from '../../assets/logo.svg';

const Footer: React.FC = () => {
  return <div className={styles.footer}>
  	<Row>
  		<Col xs={12} sm={12} md={4}>
  			<div className={styles.footerTitle}>Community</div>
  			<a href="#">Snapshot</a>
  			<a href="#">Medium</a>
  			<a href="#">Discord</a>
  			<a href="#">Announcements</a>
  		</Col>
  		<Col xs={12} sm={12} md={4}>
  			<div className={styles.footerTitle}>Developers</div>
  			<a href="#">Docs</a>
  			<a href="#">Github</a>
  			<a href="#">Road Map</a>
  		</Col>
  		<Col xs={12} sm={12} md={4}>
  			<div className={styles.footerTitle}>Learn</div>
  			<a href="#">Dabacus’ Philosophy</a>
  			<a href="#">About</a>
  			<a href="#">Glossary</a>
  			<a href="#">FAQ</a>
  		</Col>
  		<Col xs={12} sm={12} md={4}>
  			<div className={styles.footerTitle}>Products</div>
  			<a href="#">White Paper</a>
  			<a href="#">World Unit of Account Index</a>
  			<a href="#">Exchange</a>
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
