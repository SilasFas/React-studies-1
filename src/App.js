import { getValue } from '@testing-library/user-event/dist/utils';
import './App.css';
import { useEffect, useState } from "react";

function App() {

  const [name, setName] = useState("")
  const [predictedAge, setPredictedAge] = useState({})

  const fetchData = () => {
    fetch(`https://api.agify.io/?name=${name}`)
      .then((response) => response.json())
      .then((data) => {
        setPredictedAge(data)
        console.log(data)
      })
  }


  return (
    <div className="App">
      <input
        type="text"
        placeholder='write your name here...'
        onChange={(event) => setName(event.target.value)}
      />

      <button onClick={fetchData}>Predict Age</button>

      <h1>Name: {predictedAge?.name /*Only try to access data from this object if this one is not an empty object null*/}</h1>
      <h1>Predicted age: {predictedAge?.age}</h1>
      <h1>Count: {predictedAge?.count}</h1>

    </div>
  );
}

export default App;
