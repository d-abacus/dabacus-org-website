import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Table } from 'antd';
import { Line } from '@ant-design/charts';
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
      key: 'rank',
      render: (text, record, index) => <div>{index+1}</div>,
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
    fetch('https://htapi.easy-ins.cn/1.1/classes/HourlyData?limit=24', {
      headers: {
        'X-LC-Id': 'Hg1dKKWBU8CPrnI2M13FSjyT-gzGzoHsz',
        'X-LC-Key': 'tRpxTTU9l9QROGBKW54h8TcC',
        'Content-Type': 'application/json'
      },
    })
      .then((response) => response.json())
      .then((json) => setData(json['results'].map((obj) => {
        console.log('ttttttt: ', obj.time);
        const res = { value: obj.value, "time": moment(obj.time.iso).format('HH')};
        console.log(JSON.stringify(res));
        return res;
      })))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const filterTable = (json: Array<Object>) => {
    var cap: number = 18697762;
    for (var i=0; i<json.length; i++) {
      if (json[i]["id"] == "bitcoin") {
        cap = json[i]["market_cap"];
        break;
      }
    }
    const factor: number = cap / 243;
    const resJson = json.filter((element: Object, index: number, array: Array<Object>) => { 
     return element["id"] !== 'tether' && element["id"] !== 'usd-coin' && element["id"] !== 'wrapped-bitcoin' && 
              element["id"] !== 'binance-usd' && element["id"] !== 'compound-usd-coin' && element["market_cap"] > factor; 
    });
    return resJson;
  }
  const calTotal = () => {
    var total: number = 0;
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
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=btc&order=market_cap_desc&per_page=70&page=1&sparkline=false')
      .then((response) => response.json())
      .then((json) => setTableData(filterTable(json)))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };

  var labelConfig = {
        style:{
          fontSize: 14,
          fontWeight: 800,
          fill: '#AAB0B8',
          fontFamily: 'Avenir-Medium',
        }
      };

  var config = {
    data: data,
    smooth: true,
    xField: 'time',
    yField: 'value',
    color: '#5956FF',
    lineStyle: {
      lineWidth: 2,
    },
    // tooltip: {
    //   customContent: (title, data) => {
    //     return <div style={{ color: '#AAB0B8', fontWeight: 800, fontSize: 14, fontFamily: 'Avenir-Medium' }}>
    //       {JSON.stringify(data.data)}
    //     </div>
    //   }
    // },
    xAxis: { 
      label: labelConfig,
      tickLine: null,
      grid: null,
    },
    yAxis: { 
      label: labelConfig,
      tickLine: null,
      min: 0.000056,
      max: 0.000058,
      subTickLine: null,
      grid: {
        line: {
          style: {
            stroke: '#f1f1f1',
          }
        }
      },
    },
  };
  var total: number = tableData.length > 0 ? calTotal() : 0;
  const currentWorldPopulation: number = 7673533972;
  const averageLifeExpectancyInYears: number = 72.6;
  var WUNBTC: number = total / (currentWorldPopulation * averageLifeExpectancyInYears);
  var resData: Array<Object> = tableData.map((element: Object) => {
    return {
      market_cap_rank: element["market_cap_rank"],
      image: element["image"],
      name: element["name"],
      current_price: (element["current_price"] / WUNBTC).toFixed(3).toLocaleString(),
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
      <Line {...config} />
    </div>
    <div className="indexed-ranking">Indexed Currencies Ranking</div>
    <div className="index-table">
      <Table dataSource={resData} columns={columns} pagination={{ pageSize: 50}} />
      <img className="logo-ball" src={logoBall} />
    </div>
  </PageContainer>;
};
