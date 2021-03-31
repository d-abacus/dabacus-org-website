import React, { useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Button, Row, Col } from 'antd';
import './Timeline.less';
import pathImg from "../assets/path.png";
import indicatorImg from "../assets/timeline-indicator.png";



export default (): React.ReactNode => {

  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const next = (num: number) => {
    setCurrentSlide(num);
  }

  const timelines: Array<Object> = [
    {},
    {"Februray": ["Ignition of the Idea, Feb 2019"]},
    {},
    {"April": [
      "Launch of Dabacus.org, Apr 2021", 
      "Launch of the first instance of ABA on the Ethereum network, Apr 2021",
      "Launch of the first instance of ABA on the Ethereum network, Apr 2021",
    ]},
    {"June-July": [
      "Launch of the second instance of ABA on the Polkadot network, Jun 2021", 
      "Launch of the third instance of ABA on the Cardano network, Jul 2021",
    ]},
    {"August": [
      "Launch of 2ØY, August 2021", 
    ]},
    {"March": [
      "Launch of Blocktree.com, Mar 2022", 
    ]},
    {"August": [
      "Launch of Dabacus Aleph-Zero,Jun 2021", 
    ]},
    {"Oct": [
      "Launch of the Dabax wallet for edge dapps, TBD", 
    ]},
    {},
    {},
    {},
  ]

  return (
    <PageContainer>
      <div className="faq-title">
        Road Map
      </div>


      <Carousel 
        centerMode={true} 
        centerSlidePercentage={33} 
        emulateTouch={true} 
        showArrows={false} 
        showThumbs={false} 
        selectedItem={currentSlide}
      >

        {timelines.map((obj: Object, index: number) => {
          if (Object.keys(obj).length > 0) {
            const month: String = Object.keys(obj)[0];
            const events: Array<String> = obj[month];
            return <div>
              <div className="events">
              <img className="indicator" src={indicatorImg} />
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
          <Button className={currentSlide < 3 ? 'active' : ''} type="text" onClick={() => next(1)}>2019</Button>
        </Col>
        <Col span={4}>
          <Button className={currentSlide < 6 && currentSlide > 2 ? 'active' : ''} type="text" onClick={() => next(3)}>2021</Button>
        </Col>
        <Col span={4}>
          <Button className={currentSlide < 9 && currentSlide > 5 ? 'active' : ''} type="text" onClick={() => next(6)}>2022</Button>
        </Col>
        <Col span={4}>
          <Button className={currentSlide > 8 ? 'active' : ''} type="text" onClick={() => next(9)}>Future</Button>
        </Col>
      </Row>


    </PageContainer>
  );
};
