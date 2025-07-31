import React, { Component } from 'react';

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: '',
      convertedAmount: null
    };
  }

  handleAmountChange = (event) => {
    this.setState({ amount: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { amount } = this.state;
    const euroToInrRate = 80;
    const converted = parseFloat(amount) * euroToInrRate;
    this.setState({ convertedAmount: converted });
    alert(`Converting to ${converted}`);
  };

  render() {
    return (
      <div>
        <h2>Currency Convertor!!!</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Amount (in Euro): </label>
            <input 
              type="number" 
              value={this.state.amount} 
              onChange={this.handleAmountChange} 
              placeholder="Enter amount in Euro"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        {this.state.convertedAmount !== null && (
          <p>Converted Amount: {this.state.convertedAmount} INR</p>
        )}
      </div>
    );
  }
}

export default CurrencyConvertor;