
import React, { useState, useEffect } from 'react'
import { Button, Menu, Typography, Avatar } from 'antd'
import {
    HomeOutlined,
    MoneyCollectOutlined,
    BulbOutlined,
    FundOutlined,
    MenuOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import icon from '../images/cryptocurrency.png'
const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(null);

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    useEffect(() => {
        if (screenSize < 768) {
            setActiveMenu(false);

        } else {
            setActiveMenu(true)
        }
    }, [screenSize])

    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={icon} size="large" />
                <Typography.Title level={2} className="logo">
                    <Link to="/" className="logo-link">Crypto Hub</Link>
                </Typography.Title>
                <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}>
                    <MenuOutlined />
                </Button>
            </div>
            {activeMenu && (
                <Menu className="menu-container">
                    <Menu.Item icon={<HomeOutlined className="menu-item-icon" />} key="home">
                        <Link to="/" >Home</Link>
                    </Menu.Item>
                    <Menu.Item icon={<FundOutlined className="menu-item-icon" />} key="cryptocurrencies">
                        <Link to="/cryptocurrencies" >Cryptocurrency</Link>
                    </Menu.Item>
                    <Menu.Item icon={<MoneyCollectOutlined />}  key="exchange">
                        <Link to="/exchange" >Exchange</Link>
                    </Menu.Item>
                    <Menu.Item icon={<BulbOutlined  className="menu-item-icon"/>} key="news">
                        <Link to="/news" >News</Link>
                    </Menu.Item>
                </Menu>

            )}



        </div>
    )
}

export default Navbar
