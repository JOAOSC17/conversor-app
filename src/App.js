import React, { Fragment } from 'react';
import './App.css';
import CurrencyRow from './Components/CurrencyRow';

function App() {
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
