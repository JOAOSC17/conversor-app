import React, { Fragment, useEffect, useState } from 'react';
import CurrencyRow from './Components/CurrencyRow';
import './index.css'
const KEY = process.env.REACT_APP_API_KEY;
const BASE_URL =`http://api.exchangeratesapi.io/v1/latest?access_key=${KEY}`;

function App(){
  const  [currencyOptions, setCurrencyOptions]= useState([]);

  console.log(currencyOptions);
  useEffect(()=>{
    fetch()
      .then(res=>res.json())
      .then(data=> {
        console.log(data);
        if ( data.rates !== null && data.rates !== undefined &&
          typeof Object.keys(data.rates) !== "undefined" &&
          Object.keys(data.rates).length > 0
        ) {
          setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
        }
   
    })  
  },[])

  return (
    <Fragment>
      <h1>Convert</h1>
      <CurrencyRow currencyOptions={currencyOptions}/>
      <span className="equals">=</span>
      <CurrencyRow currencyOptions={currencyOptions}/>
    </Fragment>
  );
}

export default App;
