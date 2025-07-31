import React, { Component } from 'react';
import './App.css';


function UserGreeting(props) {
  return <h1>Welcome back! You can now book your tickets.</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up to book flight tickets.</h1>;
}


function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}


function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}


function FlightDetailsPage(props) {
  return (
    <div className="page-content">
      <h2>Available Flights</h2>
      <p>Flight 101: New York to London</p>
      <p>Flight 202: Paris to Tokyo</p>
      <p>Flight 303: Sydney to Los Angeles</p>
    </div>
  );
}


function TicketBookingPage(props) {
    return (
      <div className="page-content">
        <h2>Book Your Flight</h2>
        <input type="text" placeholder="Enter Flight Number" />
        <button>Book Now</button>
      </div>
    );
}



class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick = () => {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick = () => {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    let page;

    
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
      page = <TicketBookingPage />; 
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
      page = <FlightDetailsPage />; 
    }

    return (
      <div className="App">
        <header className="App-header">
            
            <Greeting isLoggedIn={isLoggedIn} />
            
            
            {page}

           
            {button}
        </header>
      </div>
    );
  }
}

export default App;