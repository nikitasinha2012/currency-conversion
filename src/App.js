import React, { Component } from 'react';
import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      inputAmount: "",
      convertedAmout: "",
      inputCode: "",
      outputCode: "",
      data: ""
    }
  }

  handleChange = (e) => {
    this.setState({ inputAmount: e.target.value })
  }

  handleInputCurrency = (e) => {
    this.setState({ inputCode: e.target.value })
  }

  handleOutputCurrency = (e) => {
    this.setState({ outputCode: e.target.value })
  }

  handleConvert = () => {
    const { inputAmount, inputCode, outputCode } = this.state;
    if (inputAmount && inputCode && outputCode) {
      fetch(`https://api.frankfurter.app/latest?amount=${inputAmount}&from=${inputCode}&to=${outputCode}`)
        .then(response => response.json())
        .then(data => this.setState({ data: data.rates.outputCode}));
    }
    else {
      alert('Please select the amount and the input-output methods!')
    }

  }

  render() {
    console.log('output?', this.state.data)
   
    return (
      <div className="App">
        <div className="input-container">
          <h3>Input Amount</h3>
          <input type="number" onChange={this.handleChange} />
          <select className="currency" id="currency" onChange={this.handleInputCurrency}>
            <option value="select">Select</option>
            <option value="AUD">AUD</option>
            <option value="BGN">BGN</option>
            <option value="BRL">BRL</option>
            <option value="CAD">CAD</option>
            <option value="CHF">CHF</option>
            <option value="CNY">CNY</option>
            <option value="CZK">CZK</option>
            <option value="DKK">DKK</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="HKD">HKD</option>
            <option value="HRK">HRK</option>
            <option value="HUF">HUF</option>
            <option value="IDR">IDR</option>
            <option value="ILS">ILS</option>
            <option value="INR">INR</option>
            <option value="ISK">ISK</option>
            <option value="JPY">JPY</option>
            <option value="KRW">KRW</option>
            <option value="MXN">MXN</option>
            <option value="MYR">MYR</option>
            <option value="NOK">NOK</option>
            <option value="NZD">NZD</option>
            <option value="PHP">PHP</option>
            <option value="PLN">PLN</option>
            <option value="RON">RON</option>
            <option value="RUB">RUB</option>
            <option value="SEK">SEK</option>
            <option value="SGD">SGD</option>
            <option value="THB">THB</option>
            <option value="TRY">TRY</option>
            <option value="USD">USD</option>
            <option value="ZAR">ZAR</option>
          </select>
        </div>
        <button className="convert-button" onClick={this.handleConvert}>Convert</button>
        <div className="output-container">
          <h3>Output Amount</h3>
          <input type="number" onChange={this.handleChange} value={this.state.data} />
          <select className="currency" id="currency" onChange={this.handleOutputCurrency}>
            <option value="select">Select</option>
            <option value="AUD">AUD</option>
            <option value="BGN">BGN</option>
            <option value="BRL">BRL</option>
            <option value="CAD">CAD</option>
            <option value="CHF">CHF</option>
            <option value="CNY">CNY</option>
            <option value="CZK">CZK</option>
            <option value="DKK">DKK</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="HKD">HKD</option>
            <option value="HRK">HRK</option>
            <option value="HUF">HUF</option>
            <option value="IDR">IDR</option>
            <option value="ILS">ILS</option>
            <option value="INR">INR</option>
            <option value="ISK">ISK</option>
            <option value="JPY">JPY</option>
            <option value="KRW">KRW</option>
            <option value="MXN">MXN</option>
            <option value="MYR">MYR</option>
            <option value="NOK">NOK</option>
            <option value="NZD">NZD</option>
            <option value="PHP">PHP</option>
            <option value="PLN">PLN</option>
            <option value="RON">RON</option>
            <option value="RUB">RUB</option>
            <option value="SEK">SEK</option>
            <option value="SGD">SGD</option>
            <option value="THB">THB</option>
            <option value="TRY">TRY</option>
            <option value="USD">USD</option>
            <option value="ZAR">ZAR</option>
          </select>
        </div>
      </div>
    );
  }
}

export default App;
