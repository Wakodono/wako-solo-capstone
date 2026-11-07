# CoinView

A cryptocurrency information dashboard built with React. Developed as a solo capstone project for Strive School.

<img width="1909" alt="CoinView homepage showing global statistics and top cryptocurrencies" src="https://github.com/Wakodono/wako-solo-capstone/assets/53127265/21483887-1bcb-4fb7-ac8b-7302ebab467c">

## What This Project Demonstrates

This frontend application fetches and displays cryptocurrency market data and news from third-party APIs. The implementation uses:

- **React 17** with functional components and hooks (`useState`, `useEffect`, `useParams`)
- **Redux Toolkit** with RTK Query for API state management—see `src/app/store.js` and `src/services/`
- **Ant Design** component library for layout, forms, cards, navigation, and theming (`antd` dark theme)
- **Chart.js** via `react-chartjs-2` for rendering price history line charts—see `src/components/LineChart.jsx`
- **React Router v6** for client-side routing between views

## Features

The following features are present in the source code (based on source review; end-to-end functionality not tested):

| Feature | Notes |
|---------|-------|
| Global crypto statistics | Homepage displays totals from Coinranking API |
| Cryptocurrency list | Searchable grid of coins with price, market cap, daily change |
| Coin detail view | Price chart with selectable time periods, statistics, description, external links |
| News feed | Filterable by coin via Bing News Search API |
| Responsive layout | Mobile navigation with hamburger menu |

### Limitations

- **Login/Register**: Form UI exists but is not connected to authentication—submissions log to console only
- **Exchanges page**: Route exists but displays placeholder text; implementation incomplete

## Project Structure

```
src/
├── app/store.js           # Redux store with RTK Query middleware
├── components/            # React components (Homepage, Cryptocurrencies, CryptoDetails, News, etc.)
├── services/
│   ├── cryptoApi.js       # RTK Query API for Coinranking endpoints
│   └── cryptoNewsApi.js   # RTK Query API for Bing News Search
└── App.js                 # Main app with routing
```

## Related Repository

Backend repository: [wako-solo-capstone-be](https://github.com/Wakodono/wako-solo-capstone-be)

## Running Locally

Requires Node.js and npm. The application depends on external APIs via RapidAPI.

```bash
npm install
npm start
```

The following environment variables must be set (create a `.env` file in the project root):

```
REACT_APP_CRYPTO_RAPIDAPI_HOST=<coinranking API host>
REACT_APP_RAPIDAPI_KEY=<your RapidAPI key>
REACT_APP_CRYPTO_API_URL=<coinranking API base URL>
REACT_APP_NEWS_RAPIDAPI_HOST=<Bing News Search API host>
REACT_APP_NEWS_API_URL=<Bing News Search API base URL>
```

## Deployed Version

A build was previously deployed to https://coinview-react.netlify.app. Runtime behaviour and API availability have not been verified.

---

Wako Anindo · Strive School Solo Capstone
