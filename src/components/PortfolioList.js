import React from 'react'
import Portfolio from './Portfolio'

export default function PortfolioList( { portfolios }) {
  
  // console.log(portfolios);
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
        <button className="btn btn--primary">Add Portfolio</button>
      </div>
    </div>
      </>
  )
}
