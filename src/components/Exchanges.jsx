import { Collapse, Typography } from 'antd';
import React from 'react';
import { useGetExchangesQuery } from '../services/cryptoApi';
import Loader from './Loader';

const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
    const { data, isFetching } = useGetExchangesQuery()
    const exchangesList =  data?.data?.exchanges
    console.log(exchangesList)

    if (isFetching) return <Loader />;
    
    return (
        <div>
            Exchanges
        </div>
    )
}

export default Exchanges
