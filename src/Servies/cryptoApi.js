import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '87312c18b3msh91c5b85bff76aa1p1d1919jsn37d92e886837'

}

const baseUrl = 'https://coinranking1.p.rapidapi.com/coins'

/* var options = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    headers: {
      'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
      'x-rapidapi-key': '87312c18b3msh91c5b85bff76aa1p1d1919jsn37d92e886837'
    }
  }; */