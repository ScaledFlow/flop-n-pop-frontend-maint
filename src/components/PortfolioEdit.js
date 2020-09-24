import React, { useContext } from 'react'
import AssetEdit from './AssetEdit'
import { PortfolioContext } from './App'

export default function PortfolioEdit( { portfolio } ) {
  const { handlePortfolioChange } = useContext(PortfolioContext)
  // console.log(handlePortfolioChange);
  

  function handleChange(changes) {
    handlePortfolioChange(portfolio.id, { ...portfolio, ...changes })
  }

  function handleAssetChange(id, asset) {
    const newAssets = [...portfolio.assets]
    const index = newAssets.findIndex(i => i.id === id)
    newAssets[index] = asset
    handleChange({ assets: newAssets})
  }
  
  return (
    <div className="portfolio-edit">
      <div className="portfolio-edit__remove-button-container">
        <button className="btn portfolio-edit__remove-button">
          &times;
        </button>
      </div>
      <div className="portfolio-edit__details-grid">
        <label htmlFor="name" 
          className="portfolio-edit__label">
          Portfolio Name</label>
        <input type="text" 
          name="name" 
          id="name" 
          onInput={e => handleChange({ portfolioName: (e.target.value).toUpperCase() })}
          value={portfolio.portfolioName}
          className="portfolio-edit__input"  />
        <label htmlFor="description" 
          className="portfolio-edit__label">
          Description </label>
        <textarea 
          name="description" 
          className="portfolio-edit__input"
          id="description"
          onInput={e => handleChange({ description: e.target.value })}
          value={portfolio.description} />
      </div>
      <br/>
      <label  className="portfolio-edit__label" >Assets</label>
      <div className="portfolio-edit__asset-grid">
        <div>Symbol</div>
        <div>Company Name</div>
        <div></div>
        {portfolio.assets.map(asset => (
           <AssetEdit 
           key={asset.id} 
           handleAssetChange={handleAssetChange}
           asset={asset}
          />
        ))}
        {/* <AssetEdit />
        <AssetEdit /> */}
      </div>
      <div className="portfolio-edit__add-asset-btn-container">
        <button className="btn btn--primary">Add Asset</button>
      </div>
    </div>
  )
}
