import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const ItemName = {
    Name: "DBS",
    Rent: 50000,
    Address: "Chennai"
  };
   const officeList = [
    { Name: "Tidel Park", Rent: 45000, Address: "Chennai" },
    { Name: "MindSpace", Rent: 62000, Address: "Hyderabad" },
    { Name: "WeWork", Rent: 75000, Address: "Bangalore" },
    { Name: "DLF Cyber", Rent: 58000, Address: "Gurgaon" }
  ];

  const rentColor=officeList.map(p=>{
    if(p.Rent<60000)
      return 'red';
    else
      return 'green'
  })
  
  const heading = React.createElement('h1', {}, 'Office Space , at Affordable Range');

  const jsxatt = <img src="" width="30%" height="30%" alt="Office Space" style={{ marginBottom: '20px' }} />;

  let colors = '';
  if (ItemName.Rent < 60000) {
    colors = 'red';
  } else {
    colors = 'green';
  }

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial' }}>
      {heading} 
      {jsxatt}
      <h2>Name: {ItemName.Name}</h2>
      <h3 style={{ color: colors }}>Rent: Rs. {ItemName.Rent}</h3>
      <h3>Address: {ItemName.Address}</h3>

      
      <h2>Other Available Office Spaces:</h2>
      <ul>
        {officeList.map((office, index) => {
          const rentStyle = { color: office.Rent < 60000 ? 'red' : 'green' };
          return (
            <li key={index} style={{ marginBottom: '10px' }}>
              <strong>Name:</strong> {office.Name} <br />
              <strong>Rent:</strong> <span style={{color :rentColor[index]}}>Rs. {office.Rent}</span> <br />
              <strong>Address:</strong> {office.Address}
            </li>
          );
        })}
      </ul>
    </div>
    );
}


export default App;
