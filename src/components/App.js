import React, { useEffect, useState } from 'react';
import PortfolioList from './PortfolioList'
import PortfolioEdit from './PortfolioEdit'
import '../css/app.css'
import uuid from 'react-uuid'

export const PortfolioContext = React.createContext();

const LOCAL_STORAGE_KEY = 'flopnpop.portfolio'

function App() {
  const [selectedPortfolioId, setSelectedPortfolioID ] = useState();
  const [portfolios, setPortfolios] = useState(samplePortfolios);

  const selectedPortfolio = 
  portfolios.find(portfolio => portfolio.id === selectedPortfolioId)
 
  const PortfolioContextValue = {
    handlePortfolioAdd: handlePortfolioAdd,
    handlePortfolioDelete: handlePortfolioDelete,
    handlePortfolioSelect: handlePortfolioSelect,
    handlePortfolioChange: handlePortfolioChange
  }

  useEffect(() => {
    const portfolioJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (portfolioJSON != null) setPortfolios(JSON.parse(portfolioJSON))
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(portfolios))
  }, [portfolios])

  function handlePortfolioChange(id, portfolio) {
    const newPortfolios = [...portfolios]
    const index = newPortfolios.findIndex(p => p.id === id)
    newPortfolios[index] = portfolio
    setPortfolios(newPortfolios)
  }
  
  function handlePortfolioSelect(id) {
    setSelectedPortfolioID(id)
  }

  function handlePortfolioAdd() {
    // const newPortfolio = {
    //   id: uuid(),
    //   portfolioName: 'New',
    //   description: 'Test Desc',
    //   assets: [
    //     {
    //       id:uuid(),
    //       ticker: 'TSLA',
    //       desc: 'Tesla'
    //     },
    //     {
    //       id:uuid(),
    //       ticker: 'APPL',
    //       desc: 'Apple'
    //     }
    //   ]
    // }

    const newPortfolio = {
      id: uuid(),
      portfolioName: '',
      description: '',
      assets: [
        {
          id:uuid(),
          ticker: '',
          desc: ''
        }
      ]
    }
      setSelectedPortfolioID(newPortfolio.id)
      setPortfolios([...portfolios, newPortfolio])
  }

  function handlePortfolioDelete(id) {
    if (selectedPortfolioId != null && selectedPortfolioId === id) {
      setSelectedPortfolioID(undefined);
    }
    setPortfolios(portfolios.filter(portfolio => portfolio.id !== id ))
  }

  return (
    <>
      <PortfolioContext.Provider value={PortfolioContextValue}>
        <PortfolioList portfolios={portfolios} />
        {selectedPortfolio && <PortfolioEdit portfolio={selectedPortfolio}/>}
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
