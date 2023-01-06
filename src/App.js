import './App.css';
import { useState } from 'react';

function App() {

  const [total, setTotal] = useState(0)
  const [firstNum, setFirstNum] = useState(0)
  const [secondNum, setSecondNum] = useState(0)
  
  function Calculate(e) {
    switch (e.target.textContent) {
      case "Somar":
        setTotal(parseInt(firstNum) + parseInt(secondNum)) 
        break;
      case "Subtrair":
        setTotal(firstNum - secondNum)
        break
      case "Multiplicar":
        setTotal(firstNum * secondNum)
        break;
      case "Dividir":
        setTotal(firstNum / secondNum)
        break;
      default:
        break;
    }
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <label htmlFor='num1'>Primeiro Número</label>
        <input id='num1' onChange={(e) => setFirstNum(e.target.value)} type='text' />
        <br></br>
        <label htmlFor="num2">Segundo Número</label>
        <input id='num2' onChange={(e) => setSecondNum(e.target.value)} type='text' />
        <br></br>

        <button onClick={(e) => Calculate(e)}>Somar</button>
        <br></br>
        <button onClick={(e) => Calculate(e)}>Subtrair</button>
        <br></br>
        <button onClick={(e) => Calculate(e)}>Multiplicar</button>
        <br></br>
        <button onClick={(e) => Calculate(e)}>Dividir</button>
        <br></br>

        <span>Total = {total}</span>
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
