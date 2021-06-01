import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Table } from 'antd';
import { history, connect } from 'umi';
import type { Dispatch } from 'umi';
import { Line } from '@ant-design/charts';
import { PageContainer } from '@ant-design/pro-layout';
import type { CoinModelState } from '@/models/coin';
import type { ConnectState } from '@/models/connect';

import './Dindex.less';
import appBgd from '../assets/app-bgd.png';
import logoBall from '../assets/logo-ball.png';

export type DindexProps = {
  dispatch: Dispatch;
  coin: CoinModelState;
};

const Dindex: React.FC<DindexProps> = (props) => {

  const [data, setData] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [coinData, setCoinData] = useState([]);
  const [dailyData, setDailyData] = useState([]);
  const [range, setRange] = useState(0);
  const columns: Array<Object> = [
    {
      title: 'Rank',
      key: 'rank',
      dataIndex: 'rank'
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
      align: 'right',
    },
    {
      title: '24H',
      dataIndex: 'price_change_percentage_24h',
      key: 'change',
      align: 'right',
      render: text => <span className={text.indexOf('-') > -1 ? 'dropped' : 'increased'}>
        {(text.indexOf('-') > -1 ? '' : '+') + text}
        </span>,
    },
    {
      title: 'Volume(24h)',
      width: 168,
      dataIndex: 'total_volume',
      align: 'right',
      key: 'volum',
    },
  ];
  useEffect(() => {
    asyncFetch('HourlyData');
    asyncFetch('DailyData');
    asyncFetchTable();
    asyncFetchCoinData();
  }, []);
  const asyncFetch = (cname: string) => {
    fetch('http://dabacus.org:3000/'+(cname === 'HourlyData' ? 'hourly-data' : 'daily-data'), {
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then((response) => response.json())
      .then((json) => {
        const res: Array<Object> = json.reverse().map((obj) => {
            return { value: obj.value, "time": moment(obj.time).format(cname === 'HourlyData' ? 'HH' : 'DD')};
          });
        if (cname === 'HourlyData') {
          setData(res);
        } else {
          setDailyData(res);
        }
      })
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
              element["id"] !== 'binance-usd' && element["id"] !== 'dai' && element["market_cap"] > factor; 
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
  const changeRange = (index: number) => {
    setRange(index);
  };

  const numberWithCommas = (x) => {
      var parts = x.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return parts.join(".");
  }

  var labelConfig = {
        style:{
          fontSize: 14,
          fontWeight: 800,
          fill: '#AAB0B8',
          fontFamily: 'Avenir-Medium',
        }
      };

  const values = range == 0 ? data.map((d) => d.value) : dailyData.map((d) => d.value);
  const minVal = values.length > 0 ? Math.min.apply(Math, values) : 0;

  var config = {
    data: range == 0 ? data : ( range == 1 ? 
      dailyData.slice(Math.max(0, dailyData.length - 7), dailyData.length) :
      dailyData
    ),
    smooth: true,
    xField: 'time',
    yField: 'value',
    color: '#5956FF',
    lineStyle: {
      lineWidth: 2,
    },
    tooltip: {
      fields: ['value'],
      formatter: (datum: Datum) => {
        return { name: datum.time, value: (datum.value*100000000).toFixed(2) + 's' };
      },
      customContent: (title, items) => {
        return (
          <>
            <ul style={{ paddingLeft: 0 }}>
              {items?.map((item, index) => {
                const { name, value, color } = item;
                return (
                  <li key={index}>
                    {value}
                  </li>
                );
              })}
            </ul>
          </>
        );
      },
    },
    xAxis: { 
      label: labelConfig,
      tickLine: null,
      grid: null,
    },
    yAxis: { 
      label: labelConfig,
      tickLine: null,
      tickInterval: 0.000001,
      min: minVal,
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
  var resData: Array<Object> = tableData.map((element: Object, index: number) => {
    return {
      rank: index+1,
      id: element["id"],
      total_supply: element["total_supply"],
      max_supply: element["max_supply"],
      circulating_supply: element["circulating_supply"],
      market_cap_rank: element["market_cap_rank"],
      market_cap: element["market_cap"],
      image: element["image"],
      name: element["name"],
      current_price: 'Ø' + numberWithCommas((element["current_price"] / WUNBTC).toFixed(3)),
      total_volume: 'Ø' + numberWithCommas((element["total_volume"] / WUNBTC).toFixed(0)),
      price_change_percentage_24h: ((element["price_change_24h"] / WUNBTC / (element["current_price"] / WUNBTC) *100).toFixed(2)) + '%',
    }
  })
  const initialValue: number = data.length > 0 ? data[0].value * 100000000 : 0;
  const endValue: number = data.length > 0 ? data[data.length-1].value * 100000000 : 0;
  const diff: number = (endValue - initialValue).toFixed(3);
  const sign: string = diff > 0 ? '+' : '';
  const percentage: string = sign + (initialValue > 0 ? diff / initialValue : 0).toFixed(2) + '%';
  return <PageContainer>
    <div className="chart-bgd"><img src={appBgd} /></div>
    <div className="index-chart">
      <div className="time-buttons">
        <ul>
          <li onClick={() => { changeRange(0) }} className={range == 0 ? "selected" : ""}>24H</li>
          <li onClick={() => { changeRange(1) }} className={range == 1 ? "selected" : ""}>1W</li>
          <li onClick={() => { changeRange(2) }} className={range == 2 ? "selected" : ""}>1M</li>
        </ul>
      </div>
      <div className="world-unit-title">The Unit (Ø)</div>
      <div className="world-unit-amount">{'Ø1 = ' + endValue.toFixed(2) + 's'}</div>
      <div className={"world-unit-percent" + (diff > 0 ? '' : ' red')}>{sign + diff + '   ' + percentage}</div>
      <Line {...config} />
    </div>
    <div className="indexed-ranking">Indexed Currencies Ranking</div>
    <div className="index-table">
      <Table 
        dataSource={resData} 
        columns={columns} 
        pagination={{ pageSize: 50}} 
        rowKey="id"
        onRow={record => {
          return {
            onClick: event => {
              const { dispatch } = props;
              dispatch({
                type: 'coin/saveCurrentCoin',
                payload: {
                  id: record.id,
                  name: record.name,
                  image: record.image,
                  currentSupply: record.circulating_supply,
                  totalSupply: record.total_supply,
                  maxSupply: record.max_supply,
                  rank: record.rank,
                  dominance: record.market_cap / total,
                },
              });
              history.push('/app/coin/'+record.id);
            },
          };
        }}
      />
      <img className="logo-ball" src={logoBall} />
    </div>
  </PageContainer>;
};

export default connect(({ coin }: ConnectState) => ({
  coin: coin,
}))(Dindex);
