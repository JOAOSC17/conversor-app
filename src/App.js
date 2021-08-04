import React, { Fragment, useEffect } from 'react';
import './App.css';
import CurrencyRow from './Components/CurrencyRow';
const apiKey = process.env.REACT_APP_API_KEY;
const url =`https://free.currconv.com/api/v7/convert?q=USD_BRL&compact=ultra&apiKey=${apiKey}`
function App() {
  useEffect(()=>{
    fetch(url)
    .then(res=>res.json())
    .then(data=> console.log(data))
  },[])
  return (
    <Fragment>
      <h1>Convert</h1>
      <CurrencyRow/>
      <span className="equals">=</span>
      <CurrencyRow/>
    </Fragment>
  );
}

export default App;
