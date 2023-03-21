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
