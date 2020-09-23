import React, { useEffect, useState } from 'react';
import PortfolioList from './PortfolioList'
import '../css/app.css'
import uuid from 'react-uuid'

export const PortfolioContext = React.createContext();

const LOCAL_STORAGE_KEY = 'flopnpop.portfolio'

function App() {
  // const [portfolios, setPortfolios] = useState(samplePortfolios);
  const [portfolios, setPortfolios] = useState(samplePortfolios);

  const PortfolioContextValue = {
    handlePortfolioAdd: handlePortfolioAdd,
    handlePortfolioDelete: handlePortfolioDelete
  }

  // console.log(PortfolioContextValue)
  
  useEffect(() => {
    console.log('Rendered get')
    const portfolioJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    console.log(portfolioJSON);
    if (portfolioJSON != null) setPortfolios(JSON.parse(portfolioJSON))
    // console.log(portfolios);
  }, [])

  useEffect(() => {
    console.log('Rendered set')
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(portfolios))
    console.log(portfolios);
  }, [portfolios])

  function handlePortfolioAdd() {
    const newPortfolio = {
      id: uuid(),
      portfolioName: 'New',
      description: 'Test Desc',
      assets: [
        {
          id:uuid(),
          ticker: 'TSLA',
          desc: 'Tesla'
        },
        {
          id:uuid(),
          ticker: 'APPL',
          desc: 'Apple'
        }
      ]
    }
     setPortfolios([...portfolios, newPortfolio])
  }

  function handlePortfolioDelete(id) {
    setPortfolios(portfolios.filter(portfolio => portfolio.id !== id ))
  }

  return (
    <>
      <PortfolioContext.Provider value={PortfolioContextValue}>
        <PortfolioList 
          portfolios={portfolios} 
          // handlePortfolioAdd={handlePortfolioAdd}
          // handlePortfolioDelete={handlePortfolioDelete}
        />
      </PortfolioContext.Provider>
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
