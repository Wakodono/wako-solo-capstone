import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Requests go through the CoinView backend, which holds the RapidAPI key.
export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_API_URL}/crypto` }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => `/coins?limit=${count}`
        }),
        getExchanges: builder.query({
            query: () => `/exchanges`
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => `/coin/${coinId}`
        }),
        getCryptoHistory: builder.query({
            query: ( {coinId, timeperiod} ) => `/coin/${coinId}/history?timeperiod=${timeperiod}`
        })
    })
})


  export const { useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery, useGetExchangesQuery } = cryptoApi
