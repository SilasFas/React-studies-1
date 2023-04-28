import { useState } from 'react';
import './App.css';


function App() {

  const [text, setText] = useState("")


  const handleClick = (endpoint) => {
    fetch(`https://excuser-three.vercel.app/v1/excuse/${endpoint}/`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data[0].excuse)
        setText(data[0].excuse)
      })
  }

  return (
    <div className="App">
      <h1>Generate an excuse</h1>

      <button onClick={() => handleClick('party')}>Party</button>
      <button onClick={() => handleClick('family')}>Family</button>
      <button onClick={() => handleClick('office')}>Office</button>

      <div>{text}</div>
    </div>
  );
}

export default App;
