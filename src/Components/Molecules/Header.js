import Button from "../Atoms/Button";
import Input from "../Atoms/Input";

function MoleculeHeader(props) {
    return (
    <div>
        {/* <label htmlFor='num1'>Primeiro Número</label> */}
        <Input onText={(event) => props.onFirstNum(event.target.value)}/>
        <br></br>
        {/* <label htmlFor="num2">Segundo Número</label> */}
        <Input onText={(event) => props.onSecondNum(event.target.value)}/>
        <br></br>
        <Button onAction={(event) => props.onCalculate(event)}>Somar</Button>
        <Button onAction={(event) => props.onCalculate(event)}>Subtrair</Button>
        <Button onAction={(event) => props.onCalculate(event)}>Multiplicar</Button>
        <Button onAction={(event) => props.onCalculate(event)}>Dividir</Button>
    </div>
    );
}


export default MoleculeHeader;

