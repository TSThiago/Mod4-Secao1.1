import Button from "../Atoms/Button";

function MoleculeHeader(props) {
    return (
    <div>
        <label htmlFor='num1'>Primeiro Número</label>
        <input id='num1' onChange={() => props.onFirstNum} type='text' />
        <br></br>
        <label htmlFor="num2">Segundo Número</label>
        <input id='num2' onChange={() => props.onSecondNum} type='text' />
        <br></br>
        <Button onClick={props.onCalculate}>Somar</Button>
        <Button onClick={props.onCalculate}>Subtrair</Button>
        <Button onClick={props.onCalculate}>Multiplicar</Button>
        <Button onClick={props.onCalculate}>Dividir</Button>
    </div>
    );
}


export default MoleculeHeader;

