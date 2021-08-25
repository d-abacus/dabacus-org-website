import React from 'react';
import styles from './Coming.less';
import comingSoon from '../assets/coming-soon.mp4';
import Countdown from 'react-countdown';
import { Row, Col } from 'antd';
import moment from 'moment';
import learnImg from '../assets/Learn.png'
import logo from '../assets/logo-white.png'
import video from '../assets/video.gif'


export default (): React.ReactNode => {

  return (
    <div className={styles.comingSoon}>
      <video autoPlay loop muted className={styles.video + " hide-mobile"}>
        <source src={comingSoon} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <img src={video} className={styles.video + " show-mobile"} />

      <div className={styles.logo}>
        <a href="/"><img src={logo} /></a>
      </div>

      <div className={styles.learn}>
        <img src={learnImg} />
      </div>

      <div className={styles.launch}>
        Launching in
      </div>

      <div className={styles.countDown}>
        <Countdown date={moment('2021-09-30')} renderer={(props) =>
          <Row align="top">
            <Col className={styles.countNum} span={3}>
              <div>{props.days < 10 ? ('0' + props.days) : props.days.toString()}</div>
              <div className={styles.dateInfo}>Days</div>
            </Col>
            <Col className={styles.countSep} span={4}>
              :
            </Col>
            <Col className={styles.countNum} span={3}>
              {props.hours < 10 ? ('0' + props.hours) : props.hours.toString()}
              <div className={styles.dateInfo}>Hours</div>
            </Col>
            <Col className={styles.countSep} span={4}>
              :
            </Col>
            <Col className={styles.countNum} span={3}>
              {props.minutes < 10 ? ('0' + props.minutes) : props.minutes.toString()}
              <div className={styles.dateInfo}>Mins</div>
            </Col>
            <Col className={styles.countSep} span={4}>
              :
            </Col>
            <Col className={styles.countNum} span={3}>
              {props.seconds < 10 ? ('0' + props.seconds) : props.seconds.toString()}
              <div className={styles.dateInfo}>Secs</div>
            </Col>
          </Row>
        } />
      </div>
    </div>
  );
};
