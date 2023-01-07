import './App.css';
import { useEffect, useState } from 'react';
import Lista from './Lista';

function App() {

  const [total, setTotal] = useState(0)
  const [firstNum, setFirstNum] = useState(0)
  const [secondNum, setSecondNum] = useState(0)
  const [storage, setStorage] = useState([])
  
  // useEffect((value) => {
  //   let values = storage.slice()
  //   values.push(value)
  //   setStorage(values)
  // }, [total])

  function addStorage(value){
    let values = storage.slice()
    values.push(value)
    setStorage(values)
  }

  function Calculate(e) {
    let result = 0
    switch (e.target.textContent) {
      case "Somar":
        result = parseInt(firstNum) + parseInt(secondNum)
        break;
      case "Subtrair":
        result = firstNum - secondNum
        break
      case "Multiplicar":
        result = firstNum * secondNum
        break;
      case "Dividir":
        result = firstNum / secondNum
        break;
    }
    setTotal(result)
    addStorage(result)
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
        <ul>
            <Lista array={storage}/>
        </ul>
        <span>Total = {total}</span>
      </header>
    </div>
  );
}

export default App;
