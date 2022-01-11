import React from 'react'
import { Layout, Typograpy, Space } from 'antd'

import { Navbar } from './components'
import './App.css'

const App = () => {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="main">
              <Layout>
                
              </Layout>
            </div>
            <div className="footer"></div>
        </div>
    )
}

export default App
