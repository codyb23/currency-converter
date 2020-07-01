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
    <main>
      <header class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Currency Rates</h1>
          <p class="lead">{currencyDetails.base}</p>
        </div>
      </header>
      <body>
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">
              Base Currency Value: {currencyValue}-{currencyDetails.base}
            </span>
          </div>
          <textarea
            class="form-control"
            aria-label="With textarea"
            onChange={(event) =>
              handleChangingCurrencyValue(event.target.value)
            }
          ></textarea>
        </div>
        <div className="currencyItems">
          <section>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <h5>GBP</h5> {currencyRates.GBP * currencyValue}
              </li>
              <li class="list-group-item">
                <h5>HKD</h5> {currencyRates.HKD * currencyValue}
              </li>
              <li class="list-group-item">
                <h5>GBP</h5> {currencyRates.GBP * currencyValue}
              </li>
              <li class="list-group-item">
                <h5>GBP</h5> {currencyRates.GBP * currencyValue}
              </li>
              <li class="list-group-item">
                <h5>GBP</h5> {currencyRates.GBP * currencyValue}
              </li>
              <li class="list-group-item">
                <h5>GBP</h5> {currencyRates.GBP * currencyValue}
              </li>
              <li class="list-group-item">
                <h5>GBP</h5> {currencyRates.GBP * currencyValue}
              </li>
              <li class="list-group-item">
                <h5>GBP</h5> {currencyRates.GBP * currencyValue}
              </li>
              <li class="list-group-item">
                <h5>GBP</h5> {currencyRates.GBP * currencyValue}
              </li>
            </ul>
          </section>
          <section>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <h5>GBP</h5> {currencyRates.GBP * currencyValue}
              </li>
              <li class="list-group-item">
                <h5>GBP</h5> {currencyRates.GBP * currencyValue}
              </li>
              <li class="list-group-item">
                <h5>GBP</h5> {currencyRates.GBP * currencyValue}
              </li>
              <li class="list-group-item">
                <h5>GBP</h5> {currencyRates.GBP * currencyValue}
              </li>
              <li class="list-group-item">
                <h5>GBP</h5> {currencyRates.GBP * currencyValue}
              </li>
              <li class="list-group-item">
                <h5>GBP</h5> {currencyRates.GBP * currencyValue}
              </li>
              <li class="list-group-item">
                <h5>GBP</h5> {currencyRates.GBP * currencyValue}
              </li>
              <li class="list-group-item">
                <h5>GBP</h5> {currencyRates.GBP * currencyValue}
              </li>
              <li class="list-group-item">
                <h5>GBP</h5> {currencyRates.GBP * currencyValue}
              </li>
            </ul>
          </section>
          <section>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <h5>GBP</h5> {currencyRates.GBP * currencyValue}
              </li>
              <li class="list-group-item">
                <h5>GBP</h5> {currencyRates.GBP * currencyValue}
              </li>
              <li class="list-group-item">
                <h5>GBP</h5> {currencyRates.GBP * currencyValue}
              </li>
              <li class="list-group-item">
                <h5>GBP</h5> {currencyRates.GBP * currencyValue}
              </li>
              <li class="list-group-item">
                <h5>GBP</h5> {currencyRates.GBP * currencyValue}
              </li>
              <li class="list-group-item">
                <h5>GBP</h5> {currencyRates.GBP * currencyValue}
              </li>
              <li class="list-group-item">
                <h5>GBP</h5> {currencyRates.GBP * currencyValue}
              </li>
              <li class="list-group-item">
                <h5>GBP</h5> {currencyRates.GBP * currencyValue}
              </li>
              <li class="list-group-item">
                <h5>GBP</h5> {currencyRates.GBP * currencyValue}
              </li>
            </ul>
          </section>
          <section>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <h5>GBP</h5> {currencyRates.GBP * currencyValue}
              </li>
              <li class="list-group-item">
                <h5>GBP</h5> {currencyRates.GBP * currencyValue}
              </li>
              <li class="list-group-item">
                <h5>GBP</h5> {currencyRates.GBP * currencyValue}
              </li>
              <li class="list-group-item">
                <h5>GBP</h5> {currencyRates.GBP * currencyValue}
              </li>
              <li class="list-group-item">
                <h5>GBP</h5> {currencyRates.GBP * currencyValue}
              </li>
              <li class="list-group-item">
                <h5>GBP</h5> {currencyRates.GBP * currencyValue}
              </li>
              <li class="list-group-item">
                <h5>GBP</h5> {currencyRates.GBP * currencyValue}
              </li>
              <li class="list-group-item">
                <h5>GBP</h5> {currencyRates.GBP * currencyValue}
              </li>
              <li class="list-group-item">
                <h5>GBP</h5> {currencyRates.GBP * currencyValue}
              </li>
            </ul>
          </section>
        </div>
      </body>
    </main>
  )
}

export default App
