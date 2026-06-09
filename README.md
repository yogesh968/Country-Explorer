# Country Explorer

A React app to explore countries around the world using the [REST Countries API](https://restcountries.com/).

## Features

- Browse all countries with flags, capital, and population
- Search countries by name
- Filter countries by region
- Click a country to view detailed info (languages, currencies, area)

## Tech Stack

- React 19
- Vite
- REST Countries API

## Getting Started

```bash
npm install
npm run dev
```

## Project Structure

```
src/
├── components/
│   ├── CountryCard.jsx
│   ├── CountryDetail.jsx
│   ├── CountryList.jsx
│   ├── ErrorBoundary.jsx
│   ├── RegionFilter.jsx
│   └── SearchBar.jsx
├── hooks/
│   └── useCountries.js
├── App.jsx
├── main.jsx
└── index.css
```

## API

Uses [REST Countries v3.1](https://restcountries.com/v3.1/all) with fields:
`name, capital, population, region, flags, languages, currencies, area`
