import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count }) => `/news?q=${encodeURIComponent(newsCategory)}&count=${count}`
        })
    })
})

export const { useGetCryptoNewsQuery } = cryptoNewsApi
