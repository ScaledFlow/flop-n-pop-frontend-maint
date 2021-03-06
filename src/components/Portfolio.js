import React, {useContext } from 'react';
import AssetList from './AssetList'
import { PortfolioContext } from './App'


export default function Portfolio( props ) {
  const { handlePortfolioDelete, handlePortfolioSelect } = useContext(PortfolioContext)

  const {
    id,
    portfolioName,
    description,
    assets
  } = props

  return (
    <div className='portfolio'>
      <div className='portfolio__header'>
       <h3 className='portfolio__title'>{portfolioName}</h3>
        <div>
          <button 
          className='btn btn--primary mr-1'
          onClick={() => handlePortfolioSelect(id)}
          >
            Edit</button>
          <button 
            className='btn btn--danger'
            onClick={() => handlePortfolioDelete(id)}>
            Delete</button>
        </div>
      </div>
      <div className='portfolio__row'>
        <span className='portfolio__label'>Desc: </span>
        <span className='portfolio__value'>{description} </span>
      </div>
      <div>
        <div className='portfolio__row'>
          <AssetList assets={assets} />
        </div>
      </div>
    </div>
  );
}
