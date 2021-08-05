import React, { Fragment, useEffect, useState } from 'react';
import CurrencyRow from './Components/CurrencyRow';
import './App.css'
// const KEY = process.env.REACT_APP_API_KEY;
// const BASE_URL =`http://api.exchangeratesapi.io/v1/latest?access_key=${KEY}`;
const API_KEY = process.env.REACT_APP_KEY;
const BASE_URL = `https://economia.awesomeapi.com.br/json`;

function App(){
  const [currencyOptions, setCurrencyOptions] = useState([])
  const [fromCurrency, setFromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState()
  const [exchangeRate, setExchangeRate] = useState()
  const [amount, setAmount] = useState(1)
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)

  let toAmount, fromAmount
  if (amountInFromCurrency) {
    fromAmount = amount
    toAmount = (amount * exchangeRate).toFixed(2);
  } else {
    toAmount = amount
    fromAmount = (amount / exchangeRate).toFixed(2);
  }

  useEffect(() => { 
    fetch(`${BASE_URL}/all`)
      .then(res => res.json())
      .then(data => {
       const firstCurrency = Object.keys(data)[0];
        const baseCurrency = Object.keys(data)[7];
        setCurrencyOptions(...[Object.keys(data)]);
        setFromCurrency(baseCurrency);
        setToCurrency(firstCurrency);
        console.log(fromCurrency);
        console.log(toCurrency);
      }
      ).catch((e)=>console.log(e));
  }, [])

  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      fetch(`${BASE_URL}/last/${fromCurrency}-${toCurrency}`)
        .then(res => res.json())
        .then(data => {
          const converter = Object.keys(data)[0];
        setExchangeRate(data[converter].bid);
        console.log(data);
        console.log(exchangeRate);
      }).catch((e)=>console.log(e));
    }
  }, [fromCurrency, toCurrency])

  function handleFromAmountChange(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency(true)
  }

  function handleToAmountChange(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency(false)
  }

  return (
    <Fragment>
      <h1>Convert</h1>
      <CurrencyRow
        currencyOptions={currencyOptions}
        selectedCurrency={fromCurrency}
        onChangeCurrency={e => setFromCurrency(e.target.value)}
        onChangeAmount={handleFromAmountChange}
        amount={fromAmount}
      />
      <div className="equals">=</div>
      <CurrencyRow
        currencyOptions={currencyOptions}
        selectedCurrency={toCurrency}
        onChangeCurrency={e => setToCurrency(e.target.value)}
        onChangeAmount={handleToAmountChange}
        amount={toAmount}
      />
    </Fragment>
  );
}

export default App;
