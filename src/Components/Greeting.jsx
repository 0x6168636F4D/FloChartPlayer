import React, { useState, useCallback } from 'react';
import TitleBar from 'frameless-titlebar';
import { css } from 'emotion';
import { Button } from 'antd';
import Navi from './Navi';

const Greeting = () => (
  <>
    <TitleBar app="&nbsp;ChartMelon Player" />
    <Navi />
    안녕하세오
  </>
);

export default Greeting;
