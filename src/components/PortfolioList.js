import React from 'react'
import Portfolio from './Portfolio'

export default function PortfolioList( { portfolios, handlePortfolioAdd }) {
  
  // 
  return (
    <>
    <div className="portfolio-list">
      <div >
        {portfolios.map(portfolio => {
          return <Portfolio key={portfolio.id} {...portfolio}
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
