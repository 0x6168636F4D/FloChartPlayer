import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { List, Avatar } from 'antd';

const SongItem = ({ data }) => {
  const [initLoading, setInitLoading] = useState(true);
  const [chartData, setChartData] = useState({});

  const initLoadCallBack = useCallback(() => {
    setChartData(data);
    setInitLoading(false);
  }, [data, chartData, setChartData]);

  useEffect(initLoadCallBack, [data, initLoadCallBack]);

  return (Object.values(chartData).length
    ? (
      <List
        className="song-chart"
        loading={initLoading}
        itemLayout="horizontal"
        dataSource={[chartData]}
        renderItem={() => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={Object.values(chartData)[0]} />}
              title={Object.values(chartData)[1]}
              description={`${Object.values(chartData)[2].substring(0, Object.values(chartData)[2].length / 2)} [${Object.values(chartData)[3]}]`}
            />
          </List.Item>
        )}
      />
    ) : null
  );
};

SongItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SongItem;
