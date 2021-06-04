import React, { useState, useEffect } from 'react';
import { connect, Link, history } from 'umi';
import moment from 'moment';
import { Row, Col } from 'antd';
import { Line } from '@ant-design/charts';
import { PageContainer } from '@ant-design/pro-layout';
import type { CoinModelState } from '@/models/coin';
import type { ConnectState } from '@/models/connect';
import appBgd from '../assets/app-bgd.png';
import logoBall from '../assets/logo-ball.png';
import backIcon from '../assets/back.png';
import './Dindex.less';

type CoinProps = {
  coin: CoinModelState;
};

const CoinPage: React.FC<CoinProps> = (props: CoinProps) => {

  const { coin = {} } = props;
  const { currentCoin } = coin;

  const [data, setData] = useState([]);
  const [dailyData, setDailyData] = useState([]);
  const [range, setRange] = useState(0);
  useEffect(() => {
    if (currentCoin) {
      asyncFetch('HourlyData');
      asyncFetch('DailyData');
    } else {
      history.push('/app/index')
    }
  }, []);
  const changeRange = (index: number) => {
    setRange(index);
  };
  const asyncFetch = (cname: string) => {
    fetch('http://dabacus.org:3000/'+(cname === 'HourlyData' ? 'coin-hourly-data' : 'coin-daily-data')+'/'+currentCoin.id.toLowerCase(), {
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then((response) => response.json())
      .then((json) => {
        const res: Array<Object> = json.reverse().map((obj) => {
            return { 
              value: obj.value, 
              "time": moment(obj.time).format(cname === 'HourlyData' ? 'HH' : 'DD'),
              marketCap: obj.market_cap,
              totalVolume: obj.total_volume,
              currentSupply: obj.circulating_supply,
            };
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
  const maxVal = values.length > 0 ? Math.max.apply(Math, values) : 0;
  const chartFactor = (maxVal - minVal) / 3;

  var config = {
    data: range == 0 ? data : ( range == 1 ? 
      dailyData.slice(Math.max(0, dailyData.length - 7), dailyData.length) :
      dailyData
    ),
    height: 500,
    autoFit: false,
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
        return { name: datum.time, value: datum.value.toFixed(3) + 's' };
      },
      customContent: (title, items) => {
        return (
          <>
            <ul style={{ paddingLeft: 0 }}>
              {items?.map((item, index) => {
                const { name, value, color } = item;
                return (
                  <li>
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
      grid: {
        line: {
          style: {
            stroke: '#E3E4E7',
            lineDash: [2, 2],
          }
        }
      },
    },
    yAxis: { 
      label: labelConfig,
      tickLine: null,
      subTickLine: null,
      tickCount: 8,
      min: minVal - chartFactor,
      max: maxVal + chartFactor,
      grid: {
        line: {
          style: {
            stroke: '#E3E4E7',
            lineDash: [2, 2],
          }
        }
      },
    },
  };

  const numberWithCommas = (x) => {
      var parts = x.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return parts.join(".");
  }

  const initialValue: number = data.length > 0 ? data[0].value : 0;
  const endValue: number = data.length > 0 ? data[data.length-1].value : 0;
  const diff: number = (endValue - initialValue).toFixed(3);
  const sign: string = diff > 0 ? '+' : '';
  const percentage: string = sign + (initialValue > 0 ? diff / initialValue : 0).toFixed(2) + '%';

  const marketCap: number = data.length > 0 ? numberWithCommas(data[data.length-1].marketCap.toFixed(0)) : 0;
  const totalVolume: number = data.length > 0 ? numberWithCommas(data[data.length-1].totalVolume.toFixed(0)) : 0;

  return <PageContainer>
    <div className="chart-bgd"><img src={appBgd} /></div>
    <div className="index-chart coin-index-chart">
      <div className="time-buttons">
        <ul>
          <li onClick={() => { changeRange(0) }} className={range == 0 ? "selected" : ""}>24H</li>
          <li onClick={() => { changeRange(1) }} className={range == 1 ? "selected" : ""}>1W</li>
          <li onClick={() => { changeRange(2) }} className={range == 2 ? "selected" : ""}>1M</li>
        </ul>
      </div>
      <Link to="/app/index"><div className="coin-back"><img className="coin-back-icon" src={backIcon} />back</div></Link>
      <div className="coin-name">
        <img className="coin-image" src={currentCoin?.image ?? ''} />
        {currentCoin?.name}
        <span className="coin-price">Ø{endValue.toFixed(2)}</span>
      </div>
      <div className={"world-unit-percent" + (diff > 0 ? '' : ' red')}>{sign + diff + '   ' + percentage}</div>
      <div className="coin-chart">
        <Line {...config} />
      </div>
      <div className="coin-info">
      <div className="info-title">{currentCoin?.name ?? ''} Info</div>
      <Row>
          <Col xs={24} sm={24} md={12} lg={12} xl={8}>
            <div className="coin-info-wrapper">
              <div className="coin-info-title">Rank</div>
              <div className="coin-info-content">{currentCoin?.rank ?? 1}</div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={8}>
          <div className="coin-info-wrapper">
            <div className="coin-info-title">Market Cap</div>
            <div className="coin-info-content">Ø{marketCap}</div>
          </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={8}>
          <div className="coin-info-wrapper">
            <div className="coin-info-title">Dominance</div>
            <div className="coin-info-content">{((currentCoin?.dominance ?? 0) * 100).toFixed(2)}%</div>
          </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={8}>
          <div className="coin-info-wrapper">
            <div className="coin-info-title">Total Volume</div>
            <div className="coin-info-content">Ø{totalVolume}</div>
          </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={8}>
          <div className="coin-info-wrapper">
            <div className="coin-info-title">Available Supply</div>
            <div className="coin-info-content">{currentCoin?.currentSupply ? numberWithCommas(currentCoin.currentSupply.toFixed(0)) : 'NA'}</div>
          </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={8}>
          <div className="coin-info-wrapper">
            <div className="coin-info-title">Total Supply</div>
            <div className="coin-info-content">{currentCoin?.totalSupply ? numberWithCommas(currentCoin.totalSupply.toFixed(0)) : 'NA'}</div>
          </div>
          </Col>
        </Row>
      </div>
      
    </div>

  </PageContainer>;
};

export default connect(({ coin }: ConnectState) => ({
  coin: coin,
}))(CoinPage);

