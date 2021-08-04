import React from 'react'

const CurrencyRow = ({currencyOptions, selectedCurrency, onChangeCurrency, amount, onChangeAmount}) => {
    return (
        <div className="input-group">
            <input type="number" className=" form-control" value={amount} onChange={onChangeAmount}/>
            <select className="form-control form-control" value={selectedCurrency} onChange={onChangeCurrency}>
        {currencyOptions.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
            </select>
        </div>
    )
}

export default CurrencyRow
