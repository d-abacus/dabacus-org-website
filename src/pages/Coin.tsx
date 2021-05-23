import React, { useState, useEffect } from 'react';
import { withRouter } from 'umi';
import moment from 'moment';
import { Line } from '@ant-design/charts';
import { PageContainer } from '@ant-design/pro-layout';
import appBgd from '../assets/app-bgd.png';
import logoBall from '../assets/logo-ball.png';
import './Dindex.less';

type CoinProps = {
  location: Object;
};

const CoinPage: React.FC<CoinProps> = (props: CoinProps) => {
  const [data, setData] = useState([]);
  const [dailyData, setDailyData] = useState([]);
  const [range, setRange] = useState(0);
  useEffect(() => {
    asyncFetch('HourlyData');
    asyncFetch('DailyData');
  }, []);
  const changeRange = (index: number) => {
    setRange(index);
  };
  const coinIds: string = props.location["pathname"].split('/');
  const coinId: number = coinIds[coinIds.length-1];
  const asyncFetch = (cname: string) => {
    fetch('http://dabacus.org:3000/'+(cname === 'HourlyData' ? 'coin-hourly-data' : 'coin-daily-data')+'/'+coinId.toLowerCase(), {
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

  var labelConfig = {
        style:{
          fontSize: 14,
          fontWeight: 800,
          fill: '#AAB0B8',
          fontFamily: 'Avenir-Medium',
        }
      };

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
        return { name: datum.time, value: datum.value.toFixed(2) + 's' };
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
      grid: null,
    },
    yAxis: { 
      label: labelConfig,
      tickLine: null,
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
      <div className="world-unit-amount">{coinId}</div>
      <div className="world-unit-percent">{sign + diff + '   ' + percentage}</div>
      <div className="coin-chart">
        <Line {...config} />
      </div>
    </div>

  </PageContainer>;
};

export default withRouter(CoinPage);

