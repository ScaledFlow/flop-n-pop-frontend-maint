import React from 'react';
import AssetList from './AssetList'

export default function Portfolio( props ) {
  console.log(props);

  const {
    portfolioName,
    description,
    assets
  } = props

  return (
    <div>
      <div>
       <h2>{portfolioName}</h2>
        <div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
      <div>
      <span>Portfolio Description: </span>
        <span>{description} </span>
      </div>
      <div>
        <span>Assets: </span>
        <div>
          <AssetList assets={assets} />
        </div>
      </div>
    </div>
  );
}
