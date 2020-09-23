import React from 'react'
import AssetEdit from './AssetEdit'

export default function PortfolioEdit() {
  return (
    <div className="portfolio-edit">
      <div>
        <button>
          &times;
        </button>
      </div>
      <div>
        <label htmlFor="name">Portfolio Name</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="description">Description </label>
        <input type="textarea" name="description" id="description" />
      </div>
      <br/>
      <label htmlFor="name">Asset Tickers</label>
      <div>
        <div>Ticker</div>
        <div>Asset Label</div>
        <div></div>
        <AssetEdit />
        <AssetEdit />
        {/* asset component */}
      </div>
      <div>
        <button>Add Ingredient</button>
      </div>
    </div>
  )
}
