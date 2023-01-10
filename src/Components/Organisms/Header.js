import List from "../Atoms/List";
import MoleculeHeader from "../Molecules/Header";
import { useState } from 'react';

function OrgHeader() {
  const [total, setTotal] = useState(0)
  const [firstNum, setFirstNum] = useState(0)
  const [secondNum, setSecondNum] = useState(0)
  const [storage, setStorage] = useState([])

  function addStorage(value) {
    let values = storage.slice()
    values.push(value)
    setStorage(values)
  }

  function Calculate(e) {
    let result = 0
    switch (e.target.textContent) {
      case "Somar":
        result = parseFloat(firstNum) + parseFloat(secondNum)
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
      default:
        alert("Deu merda")
        break;
    }
    setTotal(result)
    addStorage(result)
  }

  return (
    <div className="Calculator">
      <header className="App-header">
        <MoleculeHeader onFirstNum={event => setFirstNum(event)} onSecondNum={event => setSecondNum(event)} onCalculate={event => Calculate(event)} />
        <ul>
          <List array={storage} />
        </ul>
        <span>Total={total}</span>
      </header>
    </div>
  )
}

export default OrgHeader;