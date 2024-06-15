'use client'
import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import Link from 'next/link';

const items: MenuProps['items'] = [
  {
    label: <Link href="/">HOME</Link>,
    key: 'home',
  },
  {
    label: <Link href="/about">ABOUT</Link>,
    key: 'about',
  },
  {
    label: <Link href="/products">PRODUCT</Link>,
    key: 'product',
  },
  
  
];

const Nav: React.FC = () => {
  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default Nav;