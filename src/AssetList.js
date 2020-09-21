import React from 'react'
import Asset from './Asset'

export default function AssetList({ assets }) {
  console.log('AssetList');
  const assetElement = assets.map(asset => {
    return <Asset key={asset.id} {...asset } />
  })
  return (
    <div>
      {assetElement}
    </div>
  )
}
