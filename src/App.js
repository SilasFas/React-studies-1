import './App.css';
import { useState } from "react";

function App() {

  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (event) => {
    console.log(event.target.value)
    setInputValue(event.target.value)
  }

  return (
    <div className="App">
      <input
        type="text"
        placeholder='Type something...'
        onChange={handleInputChange}
      />

      <h1>{inputValue}</h1>

    </div>
  );
}

export default App;




/*
import './App.css';
import { useState } from "react";

function App() {

  const [age, setAge] = useState(0)

  const increaseAge = () => {
    setAge(age + 1)
    console.log(age)
  }
  const decrease = () => {
    setAge(age - 1)
  }

  return (
    <div className="App">
      <h1>{age}</h1>
      <button onClick={increaseAge}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}

export default App;
*/
