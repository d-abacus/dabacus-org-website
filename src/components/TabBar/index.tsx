import React, { useState } from 'react';
import { TabBar } from 'antd-mobile';
import { history } from 'umi';
import Dindex from '../../pages/Dindex.tsx';
import Swap from '../../pages/Swap.tsx';
import farmActiveIcon from '../../assets/farm-active-icon.png';
import indexActiveIcon from '../../assets/index-icon-active.png';
import swapActiveIcon from '../../assets/swap-active-icon.png';
import indexIcon from '../../assets/index-icon.png';
import farmIcon from '../../assets/farm-normal-icon.png';
import swapIcon from '../../assets/swap-normal-icon.png';
import './index.less';

const SideMenu: React.FC = () => {

  const [selectedTab, setSelectedTab] = useState('index');

  return (
    <TabBar
      unselectedTintColor="#AAB0B8"
      tintColor="#000000"
      barTintColor="white"
    >
      <TabBar.Item
        title="Index"
        key="Index"
        icon={<img width="24" height="24" src={indexIcon} />}
        selectedIcon={<img width="24" height="24" src={indexActiveIcon} />}
        selected={selectedTab === 'index'}
        onPress={() => {
          setSelectedTab('index');
        }}
      >
        <Dindex />
      </TabBar.Item>
      <TabBar.Item
        icon={<img width="24" height="24" src={swapIcon} />}
        selectedIcon={<img width="24" height="24" src={swapActiveIcon} />}
        title="Swap"
        key="Swap"
        selected={selectedTab === 'swap'}
        onPress={() => {
          setSelectedTab('swap');
        }}
      >
        <Swap />
      </TabBar.Item>
      <TabBar.Item
        icon={<img width="24" height="24" src={farmIcon} />}
        selectedIcon={<img width="24" height="24" src={farmActiveIcon} />}
        title="Farm"
        key="Farm"
        selected={selectedTab === 'farm'}
        onPress={() => {
          history.push('/coming-soon');
        }}
      >
        <div></div>
      </TabBar.Item>
    </TabBar>
  );
};

export default SideMenu;
