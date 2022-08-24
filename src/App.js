// import logo from './logo.svg';
import React, {useState} from 'react'
import './App.css';
import Data from './MOCK_DATA.json'

function App() {
 
  const [showData, setShowData] =  useState();
  
  const handleClick = () => {
    let newDater=Data.filter(data => data['Car_model-year'] >= 2005);
    console.log('newDater', newDater)
    setShowData(newDater)
  } 
console.log('showData', showData)



  return (
    <div className="App">
      <input type="input" placeholder='search' />
      <button onClick={handleClick}>Show List</button>     

      {showData && showData.map((item)=>{
    return(
  <div key={item.id} className="objectname">
  <div>
    <li>{item.first_name}</li>
    <li>{item.last_name}</li>
    <li>{item.email}</li>
    <li>{item.gender}</li>
    <li>{item.Car_model}</li>
    <li>{item["Car_model-year"]}</li>
    <li>{item.Company_name}</li>

  </div>
  </div>
    );
  })}


    </div>
  );
}

export default App;
