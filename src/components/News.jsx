import React from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd'
import moment from 'moment'

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'

const { Text, Title } = Typography
const { Option } = Select

const News = ({ simplified }) => {
    const { data: crytpoNews } = useGetCryptoNewsQuery({ newsCategory: 'Coins', count: simplified ? 10 : 100 })

    console.log(crytpoNews)
    
    return (
        <div>
            News
        </div>
    )
}

export default News
