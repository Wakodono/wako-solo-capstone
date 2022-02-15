import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { Layout, Typography, Space } from 'antd'
import { Routes, Route, Link } from 'react-router-dom'

import { 
    Navbar, 
    Homepage, 
    Cryptocurrencies, 
    Exchanges, 
    CryptoDetails, 
    News, 
    Login, 
    Register, 
} from './components'
import './App.css'

const App = () => {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="main">
              <Layout>
                <div className="routes">
                    <Routes>
                        <Route path="/" exact element={<Homepage />} />
                        <Route path="/cryptocurrencies" exact element={<Cryptocurrencies />} />
                        <Route path="/exchanges" exact element={<Exchanges />} />
                        <Route path="/crypto/:coinId" exact element={<CryptoDetails />} />
                        <Route path="/news" exact element={<News />} />
                        <Route path="/login" exact element={<Login />} />
                        <Route path="/register" exact element={<Register />} />
                    </Routes>
                </div>
              </Layout>
            <div className="footer">
                <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
                    CoinView <br />
                </Typography.Title>
                <p>
                    Wako Anindo 2022 
                </p>
                <p>
                    <SocialIcon url="https://github.com/Wakodono" />
                    <SocialIcon url="https://instagram.com/wako_iii" />
                    <SocialIcon url="https://www.linkedin.com/in/wako-anindo-02341455/" />
                </p>
                <Space>
                    <Link to="/">Home</Link>
                    {/* <Link to="/exchanges">Exchanges</Link> */}
                    <Link to="/news">News</Link>
                </Space>
            </div>
            </div>
        </div>
    )
}

export default App
