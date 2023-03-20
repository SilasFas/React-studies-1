import './App.css';
import './Index.css';
import { User } from './User';

function App() {

  const age = 18
  const isGreen = true

  const names = ['Silas', 'Jake', 'Jessica', 'Mike', 'Dustin']

  const users = [
    { name: 'Silas', age: 25 },
    { name: 'Jake', age: 21 },
    { name: 'Jessica', age: 45 },
  ]

  const planets = [
    { name: 'Mars', isGasPlanet: false },
    { name: 'Earth', isGasPlanet: false },
    { name: 'Jupiter', isGasPlanet: true },
    { name: 'Venus', isGasPlanet: false },
    { name: 'Neptune', isGasPlanet: true },
    { name: 'Uranus', isGasPlanet: true },
  ]


  return (
    <div className="App">
      {age >= 18 ? <h1>over age</h1> : <h1>under age</h1>}
      <h1 style={{ color: isGreen ? 'green' : 'red' }}>This has color</h1>

      {isGreen && <button>This is a button</button>}


      <h1>**Lists/Arrays**</h1>

      <h1>{names[0]}</h1>

      {names.map((name, key) => { // This sctructure map my array
        return <h1 key={key}>{name}</h1>
      })}


      <h1>**Lists/Arrays 2**</h1>
      {users.map((user, key) => {
        return <User name={user.name} age={user.age} key={key} />
      })}



      <h1>Planets exercise</h1>
      {planets.map(
        (planet, key) => planet.isGasPlanet && <Planets name={planet.name} key={key}/>//component
        //(planet, key) => planet.isGasPlanet && <h1 key={key}>{planet.name}</h1>
      )}

    </div>
  );
}

//component
const Planets = ({ name, isGasPlanet }) => {
  return (
    <div><h1>{name}</h1> <h1>{isGasPlanet}</h1> </div>
  )
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