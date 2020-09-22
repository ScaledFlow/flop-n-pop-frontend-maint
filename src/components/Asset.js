import React from 'react'

export default function Asset( asset ) {
  
  
  
  return (
    <>
      <div>
      <span>   {asset.ticker}:  </span>
      <span>{asset.desc}</span>
      </div>
    </>
  )
}
