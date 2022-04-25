import React, { useState, useEffect } from 'react';
import { Menu, Button, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined, BarsOutlined, CloseOutlined } from '@ant-design/icons';
import icon from '../images/Bitcoin.png';

import { SidebarData } from './SidebarData';

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(null);
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);


    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);

        window.addEventListener('resize', handleResize);

        handleResize();
        return () => window.removeEventListener('resize', handleResize)
    }, []);

    useEffect(() => {
        if (!sidebar == true) {

            setActiveMenu(true);
            if (!sidebar) {
                setActiveMenu(false);

            }
        }


    }, [screenSize])


    return (

        <div className='nav-container'>


            <div className='navbar'>
                <Link to="#" className='menu-bars'>
                    <MenuOutlined onClick={showSidebar} />
                </Link>

            </div>

            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}  >
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars'>
                            <CloseOutlined />
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li hover ley={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span  >{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>




            </nav>


            {!showSidebar &&
                < Menu theme='dark' id='menuicons' >
                    <Menu.Item icon={<HomeOutlined />}>
                        <Link to='/'> </Link>
                    </Menu.Item>
                    <Menu.Item icon={<FundOutlined />}>
                        <Link to='/cryptocurrencies'> </Link>
                    </Menu.Item>
                    <Menu.Item icon={<MoneyCollectOutlined />}>
                        <Link to='/exchanges'> </Link>
                    </Menu.Item>
                    <Menu.Item icon={<BulbOutlined />}>
                        <Link to='/news'> </Link>
                    </Menu.Item>

                </Menu>
            }


        </div >

    )
}


export default Navbar


/**
 * 
 * 
 * 
                {activeMenu && (
                    <Menu theme='dark'>
                        <Menu.Item icon={<HomeOutlined />}>
                            <Link to='/'>Home</Link>
                        </Menu.Item>
                        <Menu.Item icon={<FundOutlined />}>
                            <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
                        </Menu.Item>
                        <Menu.Item icon={<MoneyCollectOutlined />}>
                            <Link to='/exchanges'>Exchanges</Link>
                        </Menu.Item>
                        <Menu.Item icon={<BulbOutlined />}>
                            <Link to='/news'>News</Link>
                        </Menu.Item>

                    </Menu>
                )}
 * 
 * 
 */