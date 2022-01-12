import React from 'react'
import { Layout, Typography, Space } from 'antd'
import { Routes, Route, Link } from 'react-router-dom'

import { Navbar, Homepage, Cryptocurrencies, Exchanges, CryptoDetails, News } from './components'
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
                    </Routes>
                </div>
              </Layout>
            <div className="footer">
                <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
                    CoinView <br />
                    Wako Anindo 2022
                </Typography.Title>
                <Space>
                    <Link to="/">Home</Link>
                    <Link to="/exchanges">Exchanges</Link>
                    <Link to="/news">News</Link>
                </Space>
            </div>
            </div>
        </div>
    )
}

export default App
