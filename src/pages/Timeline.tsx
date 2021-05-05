import React, { useState, useRef } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Row, Col } from 'antd';
import './Timeline.less';
import pathImg from "../assets/path.png";
import indicatorImg from "../assets/timeline-indicator.png";
import indicatorEmptyImg from "../assets/indicator-empty.png";



export default (): React.ReactNode => {

  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const mySlider = useRef(null)
  const myMobileSlider = useRef(null)
  const next = (num: number) => {
    setCurrentSlide(num);
    mySlider.current.slickGoTo(num)
  }

  const nextMobile = (num: number) => {
    setCurrentSlide(num);
    myMobileSlider.current.slickGoTo(num)
  }

  const timelines: Array<Object> = [
  {},
    {"February 2019": ["Ignition of the Ideas"]},
    {},
    {"5-5-5 (May 5, 2021)": [
      "Launch of dAbacus.org",
    ]},
    {"June-July": [
      "Launch of the first instance of ABA on the Ethereum network",
      "Launch of the next instance of ABA on a new network",
    ]},
    {"August": [
      "Launch of 2ØY", 
    ]},
    {},
    {"6-6-6 (June 6, 2022)": [
      "Mainnet Launch, Aleph-Zero", 
    ]},
    {},
    {"7-7-7 (July 7, 2023)": [
      "Launch of the dAbax wallet for edge dapps", 
    ]},
    {"Future": ["TBD"]},
    {}
  ]

  const mobileTimelines: Array<String> = 
    timelines.filter((obj: Object) => Object.keys(obj).length > 0);

  const onSlideChange = (index: number, item: Object) => {
    setCurrentSlide(index);
  }

  const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    slidesToShow: 3,
    swipeToSlide: true,
    centerPadding: '0px',
    variableWidth: true,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  const settingsMobile = {
    dots: false,
    infinite: false,
    arrows: false,
    slidesToShow: 1,
    swipeToSlide: true,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  return (
    <PageContainer>
      <div className="faq-title">
        Road Map
      </div>

      <div className="hide-mobile">
      <Slider ref={slider => (mySlider.current = slider)} {...settings}>

        {timelines.map((obj: Object, index: number) => {
          if (Object.keys(obj).length > 0) {
            const month: String = Object.keys(obj)[0];
            const events: Array<String> = obj[month];
            return <div>
              <div className="events">
              <img className="indicator" src={index < 2 ? indicatorImg : indicatorEmptyImg} />
              <div className="all-events">
                <h2>{month}</h2>
                {events.map((event: String, index: number) => 
                                <p>{event}</p>
                              )}
              </div>
              </div>
              <div><img src={pathImg} /></div>
            </div>
          } else {
            return <div>
              <div className="empty-div"></div>
              <img src={pathImg} />
            </div>
          }
         })}

      </Slider>
      <Row className="buttons-row" justify="center">
        <Col span={4}>
          <Button className={currentSlide < 2 ? 'active' : ''} type="text" onClick={() => next(0)}>2019</Button>
        </Col>
        <Col span={4}>
          <Button className={currentSlide <= 5 && currentSlide >= 3 ? 'active' : ''} type="text" onClick={() => next(3)}>2021</Button>
        </Col>
        <Col span={4}>
          <Button className={currentSlide <= 8 && currentSlide >= 6 ? 'active' : ''} type="text" onClick={() => next(6)}>2022</Button>
        </Col>
        <Col span={4}>
          <Button className={currentSlide > 8 ? 'active' : ''} type="text" onClick={() => next(9)}>2023</Button>
        </Col>
      </Row>
      </div>

      <div className="show-mobile">
      <Slider ref={slider => (myMobileSlider.current = slider)} {...settingsMobile}>

        {timelines.filter(t => Object.keys(t).length > 0).map((obj: Object, index: number) => {
          const month: String = Object.keys(obj)[0];
            const events: Array<String> = obj[month];
            return <div>
              <div className="events">
              <img className="indicator" src={index < 2 ? indicatorImg : indicatorEmptyImg} />
              <div className="all-events">
                <h2>{month}</h2>
                {events.map((event: String, index: number) => 
                                <p>{event}</p>
                              )}
              </div>
              </div>
              <div><img src={pathImg} /></div>
            </div>
         })}

      </Slider>
      <Row className="buttons-row" justify="center">
        <Col span={4}>
          <Button className={currentSlide == 0 ? 'active' : ''} type="text" onClick={() => nextMobile(0)}>2019</Button>
        </Col>
        <Col span={4}>
          <Button className={currentSlide <= 3 && currentSlide >= 1 ? 'active' : ''} type="text" onClick={() => nextMobile(1)}>2021</Button>
        </Col>
        <Col span={4}>
          <Button className={currentSlide == 4 ? 'active' : ''} type="text" onClick={() => nextMobile(4)}>2022</Button>
        </Col>
        <Col span={4}>
          <Button className={currentSlide == 5 ? 'active' : ''} type="text" onClick={() => nextMobile(5)}>2023</Button>
        </Col>
      </Row>
      </div>


    </PageContainer>
  );
};
