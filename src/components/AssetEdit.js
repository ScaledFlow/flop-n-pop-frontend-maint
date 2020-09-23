import React from 'react'

export default function AssetEdit( asset ) {
  console.log(asset);
  console.log(asset.asset.ticker);
  return (
    <>
      <input 
        type="text"
        className="portfolio-edit__input"
        value={asset.asset.ticker}
      />
      <input 
        type="text" 
        className="portfolio-edit__input"
        value={asset.asset.desc}
      />
      <button className="btn btn--danger">&times;</button>
    </>
  )
}
