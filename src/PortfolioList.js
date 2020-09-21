import React from 'react'
import Portfolio from './Portfolio'

export default function PortfolioList( { portfolios }) {
  
  // console.log(portfolios);
  return (
    <div>
      {portfolios.map(portfolio => {
        
        return <Portfolio key={portfolio.id} {...portfolio}
        />

      })}

    </div>

  )
}
