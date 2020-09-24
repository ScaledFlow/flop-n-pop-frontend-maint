import React from 'react'

export default function AssetEdit( props ) {
  const {
    asset,
    handleAssetChange
  } = props;

  function handleChange(changes) {
    handleAssetChange(asset.id, { ...asset, ...changes })
  }

  return (
    <>
      <input 
        type="text"
        className="portfolio-edit__input"
        onInput={(e) => handleChange({ ticker: (e.target.value).toUpperCase() })}
        value={asset.ticker}
      />
      <input 
        type="text" 
        className="portfolio-edit__input"
        onInput={(e) => handleChange({  desc: e.target.value })}
        value={asset.desc}
      />
      <button className="btn btn--danger">&times;</button>
    </>
  )
}
