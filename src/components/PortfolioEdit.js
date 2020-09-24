import React, { useContext } from 'react'
import AssetEdit from './AssetEdit'
import { PortfolioContext } from './App'
import uuid from 'react-uuid'

export default function PortfolioEdit( { portfolio } ) {
  const { handlePortfolioChange, handlePortfolioSelect } = useContext(PortfolioContext)
  // 
  

  function handleChange(changes) {
    handlePortfolioChange(portfolio.id, { ...portfolio, ...changes })
  }

  function handleAssetChange(id, asset) {
    const newAssets = [...portfolio.assets]
    const index = newAssets.findIndex(i => i.id === id)
    newAssets[index] = asset
    handleChange({ assets: newAssets})
  }

  function handleAssetAdd() {
    
    const newAsset = {
      id: uuid(),
      ticker: '',
      desc: ''
    }
    handleChange({ assets: [...portfolio.assets, newAsset] })
  }  

  function handleAssetDelete(id) {
    handleChange({
      assets: portfolio.assets.filter(a => a.id !== id)
    })
     
  }
  
  return (
    <div className="portfolio-edit">
      <div className="portfolio-edit__remove-button-container">
        <button 
          className="btn portfolio-edit__remove-button"
          onClick={() => handlePortfolioSelect(undefined)}
          >
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
          onChange={e => handleChange({ portfolioName: (e.target.value).toUpperCase() })}
          value={portfolio.portfolioName}
          className="portfolio-edit__input"  />
        <label htmlFor="description" 
          className="portfolio-edit__label">
          Description </label>
        <textarea 
          name="description" 
          className="portfolio-edit__input"
          id="description"
          onChange={e => handleChange({ description: e.target.value })}
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
           handleAssetDelete={handleAssetDelete}
           asset={asset}
          />
        ))}
      </div>
      <div className="portfolio-edit__add-asset-btn-container">
        <button 
        className="btn btn--primary"
        onClick={() => handleAssetAdd()}
        >
          Add Asset
        </button>
      </div>
    </div>
  )
}
