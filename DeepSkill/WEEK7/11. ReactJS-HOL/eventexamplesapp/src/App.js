import React, { Component } from 'react';
import './App.css';
import CurrencyConvertor from './CurrencyConverter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };


  sayHello = () => {
    alert('Hello Member!');
  };


  incrementAndSayHello = () => {
    this.increment();
    this.sayHello();
  };


  decrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

 
  sayWelcome = (message) => {
    alert(message);
  };

 
  handlePress = (e) => {
    e.preventDefault();
    alert('I was clicked');
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Event Handling Examples</h1>
          
          <h2>Counter</h2>
          <p>Counter Value: {this.state.counter}</p>
          <button onClick={this.incrementAndSayHello}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>

          <hr />

          <h2>Welcome Message</h2>
        
          <button onClick={() => this.sayWelcome('Welcome')}>Say Welcome</button>
          
          <hr />

          <h2>Synthetic Event Demo</h2>
          <button onClick={this.handlePress}>Click on me</button>

          <hr />

          <CurrencyConvertor />
        </header>
      </div>
    );
  }
}

export default App;