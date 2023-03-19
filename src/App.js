import './App.css';

function App() {

  const User = ({ name, age, email, gender }) => {
    return (

      <div>
        <h1>{name}</h1>
        <h1>{age}</h1>
        <h1>{email}</h1>
        <h1>{gender}</h1>
      </div>
    )
  }

  /* I can use the component in the following way as well*/
  // const User = (props) => {
  //   return (
  //     <div>
  //       <h1>{props.name}</h1>
  //       <h1>{props.age}</h1>
  //       <h1>{props.email}</h1>
  //       <h1>{props.gender}</h1>
  //     </div>
  //   )
  // }

  /*
  const props = {
    name: 'Silas',
    age: 25,
    email: 'silas@silas.com',
    gender='Masculine'
  }
  */
  const Job = (props) => {
    return (
      <div>
        <h1>{props.salary}
        </h1> <h1>{props.position}</h1>
        <h1>{props.company}</h1>
      </div>
    )
  }

  return (
    <div className="App">
      <User
        name='Silas'
        age={25}
        email='silas@silas.com'
        gender='Masculine'
      />

      <User
        name='Beatriz'
        age={29}
        email='bia@bia.com'
        gender='Feminine'
      />

      <User
        name='Pedro'
        age={12}
        email='pedro@pedro.com'
        gender='Masculine'
      />

      <div>
        <Job salary={90000} position='Senior' company='Amazon' />
        <Job salary={12000} position='Junior' company='Google' />
        <Job salary={10000} position='PO' company='Netflix' />
      </div>


    </div>
  );
}

//function
const getName = () => {
  return 'Silas'
}

//React Component
const GetNameComponent = () => {
  return <h1>Silas</h1>
}

export default App;
