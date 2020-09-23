import React from 'react'
import AssetEdit from './AssetEdit'

export default function PortfolioEdit() {
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
          className="portfolio-edit__input"  />
        <label htmlFor="description" 
          className="portfolio-edit__label">
          Description </label>
        <textarea 
          name="description" 
          className="portfolio-edit__input"
          id="description" />
      </div>
      <br/>
      <label  className="portfolio-edit__label" >Assets</label>
      <div className="portfolio-edit__asset-grid">
        <div>Symbol</div>
        <div>Company Name</div>
        <div></div>
        <AssetEdit />
        <AssetEdit />
        {/* asset component */}
      </div>
      <div className="portfolio-edit__add-asset-btn-container">
        <button className="btn btn--primary">Add Asset</button>
      </div>
    </div>
  )
}
