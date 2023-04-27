import { useState } from 'react';
import './App.css';
import axios, { Axios } from 'axios';
import { useEffect } from 'react';


function App() {

  const [catFact, setcatFact] = useState("")


  const fetchCatFact = () => {
    fetch("https://catfact.ninja/fact")
      .then((response) => response.json())
      .then((data) => {
        setcatFact(data.fact)
      })
  }

  useEffect(() => {
    fetchCatFact()
  }, [])

  // Axios.length("https://catfact.ninja/fact")
  //   .then((response) => {
  //     console.log(response.data)
  //   })

  return (
    <div className="App">
      <button onClick={fetchCatFact}>Generate Cat Fact</button>
      <p>{catFact}</p>
    </div>
  );
}

export default App;
