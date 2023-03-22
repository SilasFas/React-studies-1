import './App.css';
import { useState } from "react";

function App() {

  const [counter, setCounter] = useState(0)

  return (
    <div className="App">

      <h1>{counter}</h1>
      <button onClick={() => { setCounter(counter + 1) }}>Increase</button>
      <button onClick={() => { setCounter(0) }}>Set to Zero</button>
      <button onClick={() => { setCounter(counter - 1) }}>Decrease</button>
    </div >
  );
}

export default App;

/* **>> Example 4 <<**

import './App.css';
import { useState } from "react";

function App() {

  const [textcolor, setTextColor] = useState('black')

  return (
    <div className="App">

      <button
        onClick={() => { setTextColor(textcolor === 'black' ? 'red ' : 'black') }}>
        Change the color
      </button>

      <h1 style={{ color: textcolor }}>Hi, my name is Silas!</h1>
    </div >
  );
}

export default App;

*/

//**>> Example 3 <<**
// import './App.css';
// import { useState } from "react";

// function App() {

//   const [showText, setShowText] = useState(true)

//   // const inputText = () => {
//   //   setShowText(!showText)
//   // }

//   return (
//     <div className="App">

//       <button
//         onClick={() => setShowText(!showText)}>
//         Show/Hide
//       </button>

//       {showText === true && <h1>Hi, my name is Silas!</h1>
//         /* if shoWText is equal to true than show this >>>
//         {showText && <h1>Hi, my name is Silas!</h1>}*/
//       }
//     </div>
//   );
// }

// export default App;

/* **>> Example 2 <<**

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
*/

/* **>> Example 1 <<**

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
