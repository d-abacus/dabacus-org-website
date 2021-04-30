import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import { Area } from '@ant-design/charts';
import { PageContainer } from '@ant-design/pro-layout';
import './Dindex.less';
import appBgd from '../assets/app-bgd.png';
import logoBall from '../assets/logo-ball.png';


export default (): React.ReactNode => {

  const [data, setData] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [coinData, setCoinData] = useState([]);
  const columns: Array<Object> = [
    {
      title: 'Rank',
      dataIndex: 'market_cap_rank',
      key: 'rank',
    },
    {
      title: '',
      dataIndex: 'image',
      key: 'image',
      render: text => <img width="32" src={text} />,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Price',
      dataIndex: 'current_price',
      key: 'price',
    },
    {
      title: '24H',
      dataIndex: 'price_change_percentage_24h',
      key: 'change',
      render: text => <span className={text.indexOf('-') > -1 ? 'dropped' : 'increased'}>
        {(text.indexOf('-') > -1 ? '' : '+') + text}
        </span>,
    },
    {
      title: 'Volumn(24h)',
      width: 168,
      dataIndex: 'total_volume',
      key: 'volum',
    },
  ];
  useEffect(() => {
    asyncFetch();
    asyncFetchTable();
    asyncFetchCoinData();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const isBigEnough = (element: Object, index: number, array: Array<Object>) => { 
   return element["id"] !== 'tether' && element["id"] !== 'usd-coin' && element["id"] !== 'wrapped-bitcoin'; 
  } 
  const calTotal = () => {
    var total: number = 0;
    console.log(coinData);
    for (var i=0;i<tableData.length;i++) {
      const coinId: Object = coinData[tableData[i]["id"]];
      if (coinId) {
        total += coinId["btc_market_cap"];
      }
    }
    return total;
  }
  const asyncFetchCoinData = () => {
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cripple%2Clitecoin%2Cbitcoin-cash%2Cchainlink%2Ccardano%2Cpolkadot%2Cbinancecoin%2Cstellar%2Cbitcoin-cash-sv%2Ceos%2Cmonero%2Cnem%2Ctron&vs_currencies=btc&include_market_cap=true&include_24hr_vol=true')
      .then((response) => response.json())
      .then((json) => setCoinData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const asyncFetchTable = () => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=btc&order=market_cap_desc&per_page=23&page=1&sparkline=false')
      .then((response) => response.json())
      .then((json) => setTableData(json.filter(isBigEnough)))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var config = {
    data: data,
    xField: 'Date',
    yField: 'scales',
    xAxis: { tickCount: 5 },
    areaStyle: function areaStyle() {
      return { fill: 'l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff' };
    },
  };
  var total: number = tableData.length > 0 ? calTotal() : 0;
  console.log("total: " + total);
  const currentWorldPopulation: number = 7673533972;
  const averageLifeExpectancyInYears: number = 72.6;
  var WUNBTC: number = total / (currentWorldPopulation * averageLifeExpectancyInYears);
  console.log("WUNBTC: " + WUNBTC);
  var resData: Array<Object> = tableData.map((element: Object) => {
    return {
      market_cap_rank: element["market_cap_rank"],
      image: element["image"],
      name: element["name"],
      current_price: (element["current_price"] / WUNBTC).toFixed(2).toLocaleString(),
      total_volume: (element["total_volume"] / WUNBTC).toFixed(0).toLocaleString(),
      price_change_percentage_24h: ((element["price_change_24h"] / WUNBTC / (element["current_price"] / WUNBTC) *100).toFixed(2)) + '%',
    }
  })
  return <PageContainer>
    <div className="chart-bgd"><img src={appBgd} /></div>
    <div className="index-chart">
      <div className="world-unit-title">A World Unit of Account (WUA)</div>
      <div className="time-buttons">
        <ul>
          <li className="selected">24H</li>
          <li>1W</li>
          <li>1M</li>
        </ul>
      </div>
      <div className="world-unit-amount">$167.284</div>
      <div className="world-unit-percent">+12.212 + 16%</div>
      <Area {...config} />
    </div>
    <div className="indexed-ranking">Indexed Currencies Ranking</div>
    <div className="index-table">
      <Table dataSource={resData} columns={columns} pagination={{ pageSize: 50}} />
      <img className="logo-ball" src={logoBall} />
    </div>
  </PageContainer>;
};
