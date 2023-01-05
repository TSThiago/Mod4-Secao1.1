import logo from './logo.svg';
import './App.css';
import Somar from "./Somar";
// import Subtrair from "./Subtrair";
// import Multiplicar from './Multiplicar';
// import Dividir from './Dividir';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='mathOperations'>
          <label htmlFor='num1'>Primeiro Número</label>
          <input id='num1' name='num1' type='text'/>
          <label htmlFor="num2">Segundo Número</label>
          <input id='num2' name='num2' type='text'/>
          <Somar></Somar>
          {/* <Subtrair></Subtrair> */}
          {/* <Multiplicar></Multiplicar>
          <Dividir></Dividir> */}
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
