import React from "react";

export default function Portfolio( props ) {
console.log(props);
  const {
    portfolioName,
    Description
  } = props

  return (
    <div>
      <div>
       <h2>{portfolioName}</h2>
        <div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
      <div>
        <span>{Description} </span>
        <span>Dominate Tech Stocks</span>
      </div>
    </div>
  );
}
