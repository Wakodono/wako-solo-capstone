import React from 'react'
import { Layout, Typograpy, Space } from 'antd'
import { Routes, Route } from 'react-router-dom'

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
            </div>
            <div className="footer"></div>
        </div>
    )
}

export default App
