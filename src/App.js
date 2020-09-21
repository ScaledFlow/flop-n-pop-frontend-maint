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
    description: 'Dominate Tech Stocks'
  },
  {
    id: 2,
    portfolioName: 'Super X Stocks',
    description: 'New Tech Stocks'
  }
]

export default App;
