import logo from './logo.svg';
import './App.css';
import ListofPlayers from './listOfPlayers';
import IndianPlayers from './indianPlayers';

function App() {
  const flag=true;
  return (
    <div className="App">
      <h1>Welcome to CricketApp</h1>
      {flag ? <ListofPlayers /> : <IndianPlayers/>}
    </div>
  );
}

export default App;
