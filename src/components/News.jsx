import React from 'react'
import { useState } from 'react'
import { Select, Typography, Row, Col, Card, Empty } from 'antd'
import moment from 'moment'

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'
import { useGetCryptosQuery } from '../services/cryptoApi'
import Loader from './Loader'

const { Text, Title } = Typography
const { Option } = Select

const demoImage = 'http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg'

const News = ({ simplified }) => {
    const [newsCategory, setNewsCategory] = useState('Cryptocurrency')
    const { data: cryptoNews, isLoading, isError } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 12 })
    const { data } = useGetCryptosQuery(100)

    if(isLoading) return <Loader />

    const articles = cryptoNews?.articles || []

    return (
        <Row gutter={[ 24, 24 ]}>
            {!simplified && (
                <Col span={24}>
                    <Select
                        showSearch
                        className='select-news'
                        placeholder="Pick a coin..."
                        optionFilterProp='children'
                        onChange={(value) => setNewsCategory(value)}
                        filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    >
                        <Option value="Cryptocurrency">Cryptocurrency</Option>
                        {data?.data?.coins.map((coin) => <Option value={coin.name}>{coin.name}</Option>)}
                    </Select>
                </Col>
            )}
            {(isError || articles.length === 0) && (
                <Col span={24}>
                    <Empty description={isError ? 'News is unavailable right now.' : `No recent news about ${newsCategory}.`} />
                </Col>
            )}
            {articles.map((news) => (
                <Col xs={24} md={12} xxl={8} key={news.url}>
                    <Card hoverable className="news-card">
                        <a href={news.url} target="_blank" rel="noreferrer">
                            <div className="news-image-container">
                                <Title className="news-title" level={4}>{news.title}</Title>
                                <img src={news.image || demoImage } alt="news" />
                            </div>
                        </a>
                        <p>
                            {news.description.length > 100 
                            ? `${news.description.substring(0, 100)} ...`
                            : news.description

                            }
                        </p>
                        <div className="provider-container">
                            <Text>{news.source}</Text>
                            <Text>{moment(news.publishedAt).startOf('ss').fromNow()}</Text>
                        </div>
                    </Card>
                </Col>
        ))}
        </Row>
    )
}

export default News
