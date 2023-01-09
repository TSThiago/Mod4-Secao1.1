import '../Calculator.css';
import { useEffect, useState } from 'react';
import List from '../Components/Atoms/List';
import Calculate from '../Components/Atoms/Calculate';
import OrgHeader from '../Components/Organisms/Header';

function Calculator() {

  // useEffect((value) => {
  //   let values = storage.slice()
  //   values.push(value)
  //   setStorage(values)
  // }, [total])


  
  return (
    <div className="Calculator">
      <header className="App-header">
        <OrgHeader/>
        {/* <label htmlFor='num1'>Primeiro Número</label>
        <input id='num1' onChange={(e) => setFirstNum(e.target.value)} type='text' />
        <br></br>
        <label htmlFor="num2">Segundo Número</label>
        <input id='num2' onChange={(e) => setSecondNum(e.target.value)} type='text' />
        <br></br>
        <button onClick={(e) => Calculate(e,firstNum,secondNum)}>Somar</button>
        <br></br>
        <button onClick={(e) => Calculate(e,firstNum,secondNum)}>Subtrair</button>
        <br></br>
        <button onClick={(e) => Calculate(e,firstNum,secondNum)}>Multiplicar</button>
        <br></br>
        <button onClick={(e) => Calculate(e,firstNum,secondNum)}>Dividir</button>
        <br></br> */}
        <ul>
            <List array={storage}/>
        </ul>
        <span>Total = {total}</span>
      </header>
    </div>
  );
}

export default Calculator;
