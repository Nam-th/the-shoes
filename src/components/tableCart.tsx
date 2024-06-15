'use client'

import React from 'react';
import { InputNumber, Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import Button from './button/button';
import Product from './products/product';
import a from "../../public/image/shoes-1.png"

interface DataType {
  key: string;
  product: any;
  size: number;
  quantity: any;
  total: number;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Product',
    dataIndex: 'product',
    key: 'product',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Size',
    dataIndex: 'size',
    key: 'size',
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
  },
  {
    title: 'Total',
    key: 'total',
    dataIndex: 'total',
  },
  {
    title: '',
    key: 'action',
    render: (_,) => (
      <Space size="small">
        <a>Delete</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    product: <Product imgSrc="https://product.hstatic.net/1000312752/product/armt013-69-1_6827b2fe673b4949bafc2249ad789ed4.jpg" name="Running Nike"></Product>,
    size: 38,
    quantity: <InputNumber defaultValue={1} min={1} />,
    total: 200
  },
  {
    key: '2',
    product: <Product imgSrc="https://png.pngtree.com/png-vector/20201128/ourlarge/pngtree-casual-shoes-png-image_2394294.jpg" name="Hot Nike"></Product>,
    size: 38,
    quantity: <InputNumber defaultValue={1} min={1} />,
    total: 199
  },
  {
    key: '3',
    product: <Product imgSrc="https://img.lovepik.com/free-png/20210918/lovepik-travel-shoes-casual-shoes-scene-map-png-image_400271088_wh1200.png" name="Running Jog"></Product>,
    size: 38,
    quantity: <InputNumber defaultValue={1} min={1} />,
    total: 300
  },
];

const TableCart: React.FC = () =>
  <Table
    columns={columns}
    dataSource={data}
  />;


export default TableCart;