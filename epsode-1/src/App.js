import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List'


function App() {

  let name = 'Silas'
  let newName = name.toUpperCase()
  function sum(a, b) {
    return a + b
  }
  let image = 'http://via.placeholder.com/150'
  const nome = 'Ana'

  return (
    <div className="App">
      <h1>Olá react!</h1>
      <p>Meu primeiro App</p>
      <p>Olá, {name}</p>
      <p>You name is: {newName}</p>
      <p>soma: {sum(1, 2)}</p>
      <img src={image} alt='minha imagem'></img>
      <HelloWorld />
      <SayMyName name='Silas' />
      <SayMyName name='Pedro' />
      <SayMyName name={nome} />
      <Pessoa
        name='Saulo'
        idade='33'
        profissao='dev'
        foto = 'http://via.placeholder.com/150'
      />
      <List/>


    </div>
  );
}

export default App;
