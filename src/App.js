import React from 'react';
import PortfolioList from './PortfolioList'

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
    portfolioName: 'Wonder X Stocks',
    description: 'Dominate Tech Stocks',
    assets: [
      {
        id: 2,
        ticker: 'TSLA',
        desc: 'Telsa'
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
    portfolioName: 'Super X Stocks',
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
        desc: 'Alphabet Inc'
      }
    ]
  }
]

export default App;
