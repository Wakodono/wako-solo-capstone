# Coinview

## Introduction

This is CoinView! A cryptocurrency dashboard for all trading enthusiasts.

<img width="1909" alt="image" src="https://github.com/Wakodono/wako-solo-capstone/assets/53127265/21483887-1bcb-4fb7-ac8b-7302ebab467c">


## Motivation

I'm sure many of us have had this thought "I should invest my money 🤔" 

One of the biggest things that hold many of us back is knowlege.

* Where do I invest?
* What do I invest in?
* Why should I invest in it?
* Is it safe?

One of the best ways to answer some of these questions is to learn as much as possible about an asset.

CoinView is your one-stop-shop for crytpcurrency information and news.

## 🚀 Quick Start

Navigate to https://coinview-react.netlify.app

## How it works

The React app (Redux Toolkit Query, Ant Design, Chart.js) gets all its data from the [CoinView backend](https://github.com/Wakodono/wako-solo-capstone-be):

- **Coin prices and history** come from Coinranking. The backend calls it with the RapidAPI key, so the key never reaches the browser.
- **News** is pulled from the CoinDesk, Cointelegraph and Decrypt RSS feeds. It used to come from the Bing News Search API, which Microsoft retired in 2025.

## Running locally

1. Start the backend (see its README) on port 3001.
2. Copy `.env.example` to `.env` and set `REACT_APP_API_URL` to the backend URL.
3. `npm install` then `npm start`.
