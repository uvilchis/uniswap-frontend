import React from 'react';

function RateAndFee ({ exchangeRate, outputTokenValue, inputTokenValue, exchangeFee }) {
  return(
    <section className="rate border pa2">
      <span className="rate-info">
        <p>Rate</p>
        <p>{(exchangeRate).toFixed(6)} {outputTokenValue + "/" + inputTokenValue}</p>
      </span>
      <span className="rate-info">
        <p>Fee</p>
        <p>{(exchangeFee/10**18).toFixed(6)} {inputTokenValue}</p>
      </span>
    </section>
  )
}

export default RateAndFee;
