import React from 'react'
import Asset from './Asset'

export default function AssetList({ assets }) {
  
  const assetElement = assets.map(asset => {
    return <Asset key={asset.id} {...asset } />
  })
  return (
    <>
    <div className='asset-grid'>
      {assetElement}
    </div>
  
    </>
  )
}
