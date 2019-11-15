import React, { useState } from 'react';
import { Menu, Button } from 'antd';

const Navi = () => {
  const [loading, setLoading] = useState(false);

  const syncLoading = () => {
    setLoading(true);
  };

  const regenLoading = () => {
    setLoading(true);
  };

  return (
    <Menu mode="horizontal">
      <Menu.Item disabled>
        <Button type="primary" loading={loading} onClick={syncLoading}>
          Sync
        </Button>
        &nbsp;
        <Button type="danger" loading={loading} onClick={regenLoading}>
          DB Regen
        </Button>
      </Menu.Item>
    </Menu>
  );
};

export default Navi;
