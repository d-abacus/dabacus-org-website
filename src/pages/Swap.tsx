import React, { useState, useEffect } from 'react';
import { Input, Tooltip } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import './Swap.less';
import appBgd from '../assets/app-bgd.png';


export default (): React.ReactNode => {

  return <PageContainer>
    <div className="swap-page">
      <div className="swap-wrapper">
        <div className="swap-title">Swap</div>
        <div className="swap-subtitle">From</div>
          <Input
            className="swap-input"
            placeholder="0.0"
          />
        <div className="swap-subtitle">To</div>
        <Input
            className="swap-input"
            placeholder="0.0"
          />

          <div className="swap-button">Swap</div> 
      </div>
    </div>
  </PageContainer>;
};
