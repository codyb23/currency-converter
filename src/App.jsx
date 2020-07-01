import React, { useState, useEffect } from 'react'
import HelloWorld from './components/HelloWorld'

function App() {
  const [currencyDetails, setCurrencyDetails] = useState({})
  const [currencyRates, setCurrencyRates] = useState({})
  const [currencyValue, setCurrencyValue] = useState()

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

  handleChangingCurrencyValue = (event) => {
    const inputFieldThatIsChanging = event.target
    const valueOfThatInputField = inputFieldThatIsChanging.value
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
            <span
              class="input-group-text"
              onChange={handleChangingCurrencyValue}
            >
              Base Currency Value: {currencyDetails.base}
            </span>
          </div>
          <textarea class="form-control" aria-label="With textarea"></textarea>
        </div>
        <section>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <h5>GBP</h5> {currencyRates.GBP}
            </li>
            <li class="list-group-item">
              <h5>HKD</h5> {currencyRates.HKD}
            </li>
            <li class="list-group-item">Morbi leo risus</li>
            <li class="list-group-item">Porta ac consectetur ac</li>
            <li class="list-group-item">Vestibulum at eros</li>
          </ul>
        </section>
      </body>
    </main>
  )
}

export default App
