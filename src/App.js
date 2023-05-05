import './App.css';
import { HideShow } from './components/HideShow';
import { Counter } from './components/Counter';

function App() {

  return (
    <div className="App">
      <h1>Custom Hook</h1>
      <HideShow />
      <Counter />
    </div>
  );
}

export default App;
