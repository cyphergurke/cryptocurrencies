import React from 'react'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, } from '@ant-design/icons';


export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <HomeOutlined />,
        cName: 'nav-text',
    },
    {
        title: 'Cryptocurrencies',
        path: '/cryptocurrencies',
        icon: <FundOutlined />,
        cName: 'nav-text',
    },
    {
        title: 'Exchanges',
        path: '/exchanges',
        icon: <MoneyCollectOutlined />,
        cName: 'nav-text',
    },
    {
        title: 'News',
        path: '/news',
        icon: <BulbOutlined />,
        cName: 'nav-text',
    },
];