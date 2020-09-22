import React from 'react';
import PortfolioList from './PortfolioList'
import '../css/app.css'

function App() {
  return (
    <>
      <PortfolioList portfolios={samplePortfolios} />
      
    </>
  );
}

const samplePortfolios = [
  {
    id: 1,
    portfolioName: 'WONDER STOCKS',
    description: 'Dominate Tech Stocks',
    assets: [
      {
        id: 2,
        ticker: 'TSLA',
        desc: 'Tesla'
      },
      {
        id: 3,
        ticker: 'APPL',
        desc: 'Apple'
      }
    ]
  },
  {
    id: 2,
    portfolioName: 'SUPER STOCKS',
    description: 'New Tech Stocks',
    assets: [
      {
        id: 3,
        ticker: 'MSFT',
        desc: 'Microsoft'
      },
      {
        id: 4,
        ticker: 'GOOG',
        desc: 'Alphabet'
      },
      {
        id: 5,
        ticker: 'AMZN',
        desc: 'Amazon'
      },
      {
        id: 6,
        ticker: 'NFLX',
        desc: 'Netflix'
      }
    ]
  }
]

export default App;
