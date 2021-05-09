import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Collapse, Row, Col } from 'antd';
import CustomIcon from '../components/CustomIcon';
import caretDown from '../assets/caret-down.png';
import caretUp from '../assets/caret-up.png';

import './FAQ.less';

const { Panel } = Collapse;

export default (): React.ReactNode => {

  return (
    <PageContainer>
      <div className="faq-title">
        FAQ
      </div>


      <Row>
      <Col xs={24} sm={24} md={18}>
        <Collapse className="faqs" expandIcon={(panelProps) => {
          if (panelProps.isActive) {
            return <CustomIcon imgSrc={caretUp} size={24} />
          } else {
            return <CustomIcon imgSrc={caretDown} size={24} />
          }
        }} expandIconPosition="left">
        <Panel header="01  What is dAbacus?" key="1">
          <p>dAbacus is a peer-to-peer network and distributed open-source software project 
          based on the blocktree structure. dAbacus is also a new medium 
          of exchange and a store of value. </p>
        </Panel>
        <Panel header="02  Is dAbacus money?" key="2">
          <p>dAbacus is not money since it does not have two of the four functions of money. 
          dAbacus is not a standard for deferred payments, and it is neither a unit of account 
          nor a ruler with which to measure value. These two properties will be covered by a 
          parallel project called The Unit that will run on dAbax.</p>
        </Panel>
        <Panel header="03  What is dAbacus' mission?" key="3">
          <p>dAbacus is concerned with P2P currency development. It is designed 
          to become the world’s currency transfer layer and scale to meet demand.</p>
        </Panel>
        <Panel header="04  How does dAbacus work?" key="4">
          <p>dAbacus as a network can be joined by mining and can also be joined by obtaining 
          some of the network’s resources. </p>
        </Panel>
        <Panel header="05  What is our consensus model?" key="5">
          <p>dAbacus has a proof-of-work (PoW) foundational layer as a consensus model. 
            Decentralized applications will branch out as PoS subnets, optimizing themselves 
            through our incentive system while shaping The BlockTree, an unlimited throughput
            supernet for our financial future. </p>
        </Panel>
        <Panel header="06  What are the features that make dAbacus so unique?" key="6">
          <p>dAbacus has a blocktree structure designed to be modular, abled to grow with the 
            passage of time through network splitting. At this point, dAbacus fulfills two of 
            the four properties of money, and The Unit with the power of the dAbax wallet will 
            complete the rest.</p>
        </Panel>
      </Collapse>
      </Col>
      </Row>


    </PageContainer>
  );
};
