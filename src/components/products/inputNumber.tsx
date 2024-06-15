
import React from 'react';
import { InputNumber } from 'antd';


const NumbericUpDown: React.FC = () => <InputNumber min={1} max={100} defaultValue={3}/>;

export default NumbericUpDown;