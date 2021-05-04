import React, { useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Button, Row, Col } from 'antd';
import './Timeline.less';
import pathImg from "../assets/path.png";
import indicatorImg from "../assets/timeline-indicator.png";
import indicatorEmptyImg from "../assets/indicator-empty.png";



export default (): React.ReactNode => {

  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const next = (num: number) => {
    setCurrentSlide(num);
  }

  const timelines: Array<Object> = [
  {},
    {"Februray": ["Ignition of the Ideas"]},
    {"5-5-5 (May 5, 2021)": [
      "Launch of Dabacus.org", 
      "Launch of the first instance of ABA on the Ethereum network",
    ]},
    {"June-July": [
      "Launch of the next instance of ABA on a new network", 
    ]},
    {"August": [
      "Launch of 2ØY", 
    ]},
    {"6-6-6 (June 6, 2022)": [
      "Mainnet Launch, Aleph-Zero", 
    ]},
    {"7-7-7 (July 7, 2023)": [
      "Launch of the dAbax wallet for edge dapps", 
    ]},
    {"Futre": ["TBD"]},
  ]

  const mobileTimelines: Array<String> = 
    timelines.filter((obj: Object) => Object.keys(obj).length > 0);

  const onSlideChange = (index: number, item: Object) => {
    setCurrentSlide(index);
  }

  return (
    <PageContainer>
      <div className="faq-title">
        Road Map
      </div>

      <div className="hide-mobile">
      <Carousel 
        centerMode={true} 
        centerSlidePercentage={33} 
        emulateTouch={false} 
        showArrows={true} 
        showThumbs={false} 
        selectedItem={currentSlide}
        onChange={onSlideChange}
      >

        {timelines.map((obj: Object, index: number) => {
          if (Object.keys(obj).length > 0) {
            const month: String = Object.keys(obj)[0];
            const events: Array<String> = obj[month];
            return <div>
              <div className="events">
              <img className="indicator" src={currentSlide < 5 ? indicatorImg : indicatorEmptyImg} />
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

      </Carousel>
      <Row className="buttons-row" justify="center">
        <Col span={4}>
          <Button className={currentSlide == 1 ? 'active' : ''} type="text" onClick={() => next(1)}>2019</Button>
        </Col>
        <Col span={4}>
          <Button className={currentSlide < 5 && currentSlide > 1 ? 'active' : ''} type="text" onClick={() => next(3)}>2021</Button>
        </Col>
        <Col span={4}>
          <Button className={currentSlide == 5 ? 'active' : ''} type="text" onClick={() => next(5)}>2022</Button>
        </Col>
        <Col span={4}>
          <Button className={currentSlide == 6 ? 'active' : ''} type="text" onClick={() => next(6)}>2023</Button>
        </Col>
      </Row>
      </div>

      <div className="show-mobile">
      <Carousel
        centerMode={false} 
        emulateTouch={true} 
        showArrows={false} 
        showThumbs={false} 
        selectedItem={currentSlide}
        onChange={onSlideChange}
      >

        {mobileTimelines.map((obj: Object, index: number) => {
          const month: String = Object.keys(obj)[0];
            const events: Array<String> = obj[month];
            return <div>
              <div className="events">
              <img className="indicator" src={currentSlide < 2 ? indicatorImg : indicatorEmptyImg} />
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

      </Carousel>
      <Row className="buttons-row">
        <Col span={6}>
          <Button className={currentSlide == 0 ? 'active' : ''} type="text" onClick={() => next(0)}>2019</Button>
        </Col>
        <Col span={6}>
          <Button className={currentSlide < 4 && currentSlide > 0 ? 'active' : ''} type="text" onClick={() => next(1)}>2021</Button>
        </Col>
        <Col span={6}>
          <Button className={currentSlide < 6 && currentSlide > 3 ? 'active' : ''} type="text" onClick={() => next(4)}>2022</Button>
        </Col>
        <Col span={6}>
          <Button className={currentSlide > 5 ? 'active' : ''} type="text" onClick={() => next(6)}>2023</Button>
        </Col>
      </Row>
      </div>


    </PageContainer>
  );
};
