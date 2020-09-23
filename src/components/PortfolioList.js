import React, { useContext } from 'react'
import Portfolio from './Portfolio'
import { PortfolioContext } from './App'

export default function PortfolioList( props ) {
  const { handlePortfolioAdd } = useContext(PortfolioContext)
  // const { handlePortfolioDelete } = useContext(PortfolioContext)

  const {
    portfolios
  } = props

  return (
    <>
    <div className="portfolio-list">
      <div >
        {portfolios.map(portfolio => {
          return <Portfolio 
          key={portfolio.id} 
          {...portfolio}
          />
        })}
      </div>
      <div className="portfolio-list__add-portfolio-btn-container">
        <button className="btn btn--primary"
        onClick={handlePortfolioAdd}
        >Add Portfolio</button>
      </div>
    </div>
      </>
  )
}
