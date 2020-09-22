import React, { useEffect, useState } from 'react';
import PortfolioList from './PortfolioList'
import '../css/app.css'
import uuid from 'react-uuid'

const LOCAL_STORAGE_KEY = 'portfolio'

function App() {
  const [portfolio, setPortfolio] = useState(samplePortfolios);

  // useEffect(() => {
  //   console.log('Rendered x')
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(portfolio))
  // }, [portfolio])

  
  // useEffect(() => {
  //   console.log('Rendered x')
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(portfolio))
  // }, [])

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
     setPortfolio([...portfolio, newPortfolio])
  }

  console.log(portfolio);


  return (
    <>
      <PortfolioList 
      portfolios={portfolio} 
      handlePortfolioAdd={handlePortfolioAdd}/>
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
