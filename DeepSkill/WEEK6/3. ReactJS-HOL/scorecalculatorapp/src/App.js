import logo from './logo.svg';
import './App.css';
import { CalculateScore } from './Components/Calculator';

function App() {
  return(
  <div>
    <CalculateScore Name={"Snehasish"} School={"The Aryans School"} Total={500} Goal={3}/>
  </div>
)}

export default App;
