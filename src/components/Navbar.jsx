import { BulbOutlined, FundOutlined, HomeOutlined, MenuOutlined } from '@ant-design/icons'
import { Avatar, Button, Menu, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import icon from '../images/bitcoin.png'


const Navbar = () => {
    const [activeMenu, setActiveMenu ] = useState(true)
    const [screenSize, setScreenSize ] = useState(null)

    useEffect(() => {
    const handleRezise = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleRezise)

    handleRezise()

    return () => {
        window.removeEventListener('resize', handleRezise)
    };
    }, []);

    useEffect(() => {
      if(screenSize < 768) {
          setActiveMenu(false)
      } else{
            setActiveMenu(true)
      }
    
    }, [screenSize])
    




    return (
        <div className="nav-container">
            <Link to="/">
                <div className="logo-container">
                    <Avatar src={icon} size="large"/>
                    <Typography.Title level={2} className="logo">
                        CoinView
                    </Typography.Title>
                    <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}>
                        <MenuOutlined />
                    </Button>
                </div>
            </Link>
            {activeMenu && (
                <Menu theme="dark">
                    <Menu.Item icon={<HomeOutlined />}>
                        <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item icon={<FundOutlined />}>
                        <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                    </Menu.Item>
                    {/* <Menu.Item icon={<MoneyCollectOutlined />}>
                        <Link to="/exchanges">Exchanges</Link>
                    </Menu.Item> */}
                    <Menu.Item icon={<BulbOutlined />}>
                        <Link to="/news">News</Link>
                    </Menu.Item>
                </Menu>

            )}
        </div>
    )
}

export default Navbar
