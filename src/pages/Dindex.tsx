import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import { Area } from '@ant-design/charts';
import { PageContainer } from '@ant-design/pro-layout';
import './Dindex.less';


export default (): React.ReactNode => {

  const [data, setData] = useState([]);
  const [tableData, setTableData] = useState([]);
  const columns: Array<Object> = [
    {
      title: 'Rank',
      dataIndex: 'market_cap_rank',
      key: 'rank',
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
    },
    {
      title: 'Volumn(24h)',
      dataIndex: 'total_volume',
      key: 'volum',
    },
  ];
  useEffect(() => {
    asyncFetch();
    asyncFetchTable();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const asyncFetchTable = () => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=btc&order=market_cap_desc&per_page=23&page=1&sparkline=false')
      .then((response) => response.json())
      .then((json) => setTableData(json))
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
  return <PageContainer>
    <Area {...config} />
    <div className="indexed-ranking">Indexed Currencies Ranking</div>
    <Table dataSource={tableData} columns={columns} />
  </PageContainer>;
};
