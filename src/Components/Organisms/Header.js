import MoleculeHeader from "../Molecules/Header";

function OrgHeader(props){
    const [total, setTotal] = useState(0)
    const [firstNum, setFirstNum] = useState(0)
    const [secondNum, setSecondNum] = useState(0)
    const [storage, setStorage] = useState([])  
    
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

      return(
        <MoleculeHeader 
        onFirstNum = {setFirstNum}
        onSecondNum = {setSecondNum}
        onCalculate = {Calculate}
        />
      )

}

export default OrgHeader;