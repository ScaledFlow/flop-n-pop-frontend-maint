import React from 'react'

export default function Asset( asset ) {
  console.log('Assets.js')
  console.log(asset.ticker);
  console.log(asset.desc);
  return (
    <>
      <div>
      <span> {asset.ticker} -  </span>
      <span>{asset.desc}</span>
      </div>
    </>
  )
}
