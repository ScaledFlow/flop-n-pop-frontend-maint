import React from 'react'
import Portfolio from './Portfolio'

export default function PortfolioList( { portfolios }) {
  return (
    <div>
      {portfolios.map(portfolio => {
   
        return <Portfolio {...portfolio} />

      })}

    </div>

  )
}
