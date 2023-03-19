import './App.css';
import './Index.css';

function App() {

  const age = 18
  const isGreen = true

  return (
    <div className="App">
      {age >= 18 ? <h1>over age</h1> : <h1>under age</h1>}
    <h1 style={{color: isGreen ? 'green' : 'red'}}>This has color</h1>

    {isGreen && <button>This is a button</button>} 
    </div>
  );
}

export default App;




// conditional in react
// {age >= 18 ? <h1>over age</h1> : <h1>underage</h1>}

/* conditional in react
function App() {

  const age = 15

  if (age >= 18) {
    return <h1>over age</h1>
  }
  return (
    <div className="App">
      <h1>Under age</h1>
    </div>
  );
}
*/