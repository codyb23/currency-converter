import React, { useState, useEffect } from 'react'
import HelloWorld from './components/HelloWorld'

function App() {
  const [currencyDetails, setCurrencyDetails] = useState({})
  const [currencyRates, setCurrencyRates] = useState({})
  const [currencyValue, setCurrencyValue] = useState(1)

  const loadCurrencyDetailsFromApi = () => {
    const url = 'https://api.ratesapi.io/api/latest?base=USD'

    fetch(url)
      .then((response) => response.json())
      .then((apiData) => {
        setCurrencyDetails(apiData)
        setCurrencyRates(apiData.rates)
      })
  }

  useEffect(loadCurrencyDetailsFromApi, [])

  const handleChangingCurrencyValue = (event) => {
    if (event === '') {
      setCurrencyValue(1)
    } else {
      setCurrencyValue(event)
    }

    console.log(currencyValue)
  }

  return (
    <body>
      <header class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Currency Rates</h1>
          <p class="lead">{currencyDetails.base}</p>
        </div>
      </header>
      <div className="inputBox">
        <article>
          <strong>
            Base Currency Value: {currencyValue}-{currencyDetails.base}
          </strong>
        </article>
        <input
          onChange={(event) => handleChangingCurrencyValue(event.target.value)}
        ></input>
      </div>
      <main>
        <div className="currencyItems">
          <section>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <h5>USD</h5> {currencyRates.USD * currencyValue}
              </li>
              <li class="list-group-item">
                <h5>GBP</h5> {currencyRates.GBP * currencyValue}
              </li>
              <li class="list-group-item">
                <h5>HKD</h5> {currencyRates.HKD * currencyValue}
              </li>
              <li class="list-group-item">
                <h5>IDR</h5> {currencyRates.IDR * currencyValue}
              </li>
              <li class="list-group-item">
                <h5>ILS</h5> {currencyRates.ILS * currencyValue}
              </li>
              <li class="list-group-item">
                <h5>DKK</h5> {currencyRates.DKK * currencyValue}
              </li>
              <li class="list-group-item">
                <h5>INR</h5> {currencyRates.INR * currencyValue}
              </li>
              <li class="list-group-item">
                <h5>CHF</h5> {currencyRates.CHF * currencyValue}
              </li>
              <li class="list-group-item">
                <h5>MXN</h5> {currencyRates.MXN * currencyValue}
              </li>
            </ul>
          </section>
          <section>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <h5>SGD</h5> {currencyRates.SGD * currencyValue}
              </li>
              <li class="list-group-item">
                <h5>THB</h5> {currencyRates.THB * currencyValue}
              </li>
              <li class="list-group-item">
                <h5>HRK</h5> {currencyRates.HRK * currencyValue}
              </li>
              <li class="list-group-item">
                <h5>EUR</h5> {currencyRates.EUR * currencyValue}
              </li>
              <li class="list-group-item">
                <h5>MYR</h5> {currencyRates.MYR * currencyValue}
              </li>
              <li class="list-group-item">
                <h5>NOK</h5> {currencyRates.NOK * currencyValue}
              </li>
              <li class="list-group-item">
                <h5>CNY</h5> {currencyRates.CNY * currencyValue}
              </li>
              <li class="list-group-item">
                <h5>BGN</h5> {currencyRates.BGN * currencyValue}
              </li>
            </ul>
          </section>
          <section>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <h5>PLN</h5> {currencyRates.PLN * currencyValue}
              </li>
              <li class="list-group-item">
                <h5>ZAR</h5> {currencyRates.ZAR * currencyValue}
              </li>
              <li class="list-group-item">
                <h5>CAD</h5> {currencyRates.CAD * currencyValue}
              </li>
              <li class="list-group-item">
                <h5>ISK</h5> {currencyRates.ISK * currencyValue}
              </li>
              <li class="list-group-item">
                <h5>BRL</h5> {currencyRates.BRL * currencyValue}
              </li>
              <li class="list-group-item">
                <h5>RON</h5> {currencyRates.RON * currencyValue}
              </li>
              <li class="list-group-item">
                <h5>NZD</h5> {currencyRates.NZD * currencyValue}
              </li>
              <li class="list-group-item">
                <h5>TRY</h5> {currencyRates.TRY * currencyValue}
              </li>
            </ul>
          </section>
          <section>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <h5>RUB</h5> {currencyRates.RUB * currencyValue}
              </li>
              <li class="list-group-item">
                <h5>KRW</h5> {currencyRates.KRW * currencyValue}
              </li>
              <li class="list-group-item">
                <h5>JPY</h5> {currencyRates.JPY * currencyValue}
              </li>
              <li class="list-group-item">
                <h5>AUD</h5> {currencyRates.AUD * currencyValue}
              </li>
              <li class="list-group-item">
                <h5>HUF</h5> {currencyRates.HUF * currencyValue}
              </li>
              <li class="list-group-item">
                <h5>SEK</h5> {currencyRates.SEK * currencyValue}
              </li>
              <li class="list-group-item">
                <h5>CZK</h5> {currencyRates.CZK * currencyValue}
              </li>
              <li class="list-group-item">
                <h5>PHP</h5> {currencyRates.PHP * currencyValue}
              </li>
            </ul>
          </section>
        </div>
      </main>
    </body>
  )
}

export default App
