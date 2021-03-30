import React from 'react';

import styles from './index.less';
import { Row, Col } from 'antd';
import discord from '../../assets/discord-black.png';
import medium from '../../assets/medium-black.png';
import snapshot from '../../assets/snapshot-black.png';
import wechat from '../../assets/wechat-blakc.png';
import bitcointalk from '../../assets/bitcointalk-black.png';
import logo from '../../assets/logo.svg';

const Footer: React.FC = () => {
  return <div className={styles.footer}>
  	<Row>
  		<Col span={4}>
  			<div className={styles.footerTitle}>Community</div>
  			<a href="#">Snapshot</a>
  			<a href="#">Medium</a>
  			<a href="#">Discord</a>
  			<a href="#">Announcements</a>
  		</Col>
  		<Col span={4}>
  			<div className={styles.footerTitle}>Developers</div>
  			<a href="#">Docs</a>
  			<a href="#">Github</a>
  			<a href="#">Road Map</a>
  		</Col>
  		<Col span={4}>
  			<div className={styles.footerTitle}>Learn</div>
  			<a href="#">Dabacus’ Philosophy</a>
  			<a href="#">About</a>
  			<a href="#">Glossary</a>
  			<a href="#">FAQ</a>
  		</Col>
  		<Col span={4}>
  			<div className={styles.footerTitle}>Products</div>
  			<a href="#">White Paper</a>
  			<a href="#">World Unit of Account Index</a>
  			<a href="#">Exchange</a>
  		</Col>
  		<Col span={8}>
  			<ul className={styles.footerSocial}>
  				<li><a href="#"><img src={snapshot} /></a></li>
  				<li><a href="#"><img src={medium} /></a></li>
  				<li><a href="#"><img src={discord} /></a></li>
  				<li><a href="#"><img src={wechat} /></a></li>
  				<li><a href="#"><img src={bitcointalk} /></a></li>
  			</ul>
  		</Col>
  	</Row>
  	<img className={styles.logoImg} src={logo} />
  </div>;
};

export default Footer;
