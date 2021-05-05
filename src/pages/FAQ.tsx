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
        <Panel header="01  What is aDbacus?" key="1">
          <p>aDbacus is a peer-to-peer network and distributed open-source software project 
          that bases itself on the blocktree ledger structure. dAbacus is also a new medium 
          of exchange and a store of value. </p>
        </Panel>
        <Panel header="02  Is dAbacus money?" key="2">
          <p>aDbacus is not money since it does not have two of the four functions of money. 
          dAbacus is not a standard for deferred payments and it’s also not a unit of account 
          or ruler with which to measure value. These two properties will be covered by a 
          parallel project called Dabax.</p>
        </Panel>
        <Panel header="03  What does dAbacus stand for?" key="3">
          <p>dAbacus is concerned solely with the facts of P2P money development. It is designed 
          to be the World’s ledger and scale to meet demand.</p>
        </Panel>
        <Panel header="04  How does dAbacus work?" key="4">
          <p>dAbacus as a network can be joined by mining and can also be joined by obtaining 
          some of the network’s resources. </p>
        </Panel>
        <Panel header="05  What is our consensus model?" key="5">
          <p>dAbacus has a proof-of-work (PoW) consensus model. </p>
        </Panel>
        <Panel header="06  What are the features that make dAbacus unique?" key="6">
          <p>dAbacus has a blocktree structure that is designed to be modular. It is designed to 
          grow with the passage of time through network splitting. dAbacus will fulfill the functions 
          of two of the four properties of money while Dabax will fulfill the remaining two functions.</p>
        </Panel>
      </Collapse>
      </Col>
      </Row>


    </PageContainer>
  );
};
