import React from 'react'

const CurrencyRow = ({currencyOptions}) => {
    return (
        <div>
            <input type="number" className="input"/>
            <select>
        {currencyOptions.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
            </select>
        </div>
    )
}

export default CurrencyRow
