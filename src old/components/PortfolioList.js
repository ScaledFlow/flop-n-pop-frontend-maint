import React from 'react'
import Portfolio from './Portfolio'

export default function PortfolioList( { portfolios, handlePortfolioAdd, handlePortfolioDelete }) {
  // export default function PortfolioList( { props }) {
  // console.log('props');
  // console.log(props);
  // const {
  //   portfolios,
  //   handlePortfolioAdd,
  //   handlePortfolioDelete
  // } = props;

  return (
    <>
    <div className="portfolio-list">
      <div >
        {portfolios.map(portfolio => {
          return <Portfolio 
            key={portfolio.id} 
            handlePortfolioDelete={handlePortfolioDelete}
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
