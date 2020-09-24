import React from 'react'

export default function AssetEdit( props ) {
  const {
    asset,
    handleAssetChange,
    handleAssetDelete
  } = props;

  function handleChange(changes) {
    handleAssetChange(asset.id, { ...asset, ...changes })
  }

  return (
    <>
      <input 
        type="text"
        className="portfolio-edit__input"
        onChange={(e) => handleChange({ ticker: (e.target.value).toUpperCase() })}
        value={asset.ticker}
      />
      <input 
        type="text" 
        className="portfolio-edit__input"
        onChange={(e) => handleChange({  desc: e.target.value })}
        value={asset.desc}
      />
      <button 
      className="btn btn--danger"
      onClick={() => handleAssetDelete(asset.id)}
      >
        &times;
      </button>
    </>
  )
}
