import Button from "../Atoms/Button";

function MoleculeHeader(props) {
    return (
    <div>
        <label htmlFor='num1'>Primeiro Número</label>
        <input id='num1' onChange={(event) => props.onFirstNum(event.target.value)} type='text' />
        <br></br>
        <label htmlFor="num2">Segundo Número</label>
        <input id='num2' onChange={(event) => props.onSecondNum(event.target.value)} type='text' />
        <br></br>
        <Button onAction={(event) => props.onCalculate(event)}>Somar</Button>
        <Button onAction={(event) => props.onCalculate(event)}>Subtrair</Button>
        <Button onAction={(event) => props.onCalculate(event)}>Multiplicar</Button>
        <Button onAction={(event) => props.onCalculate(event)}>Dividir</Button>
    </div>
    );
}


export default MoleculeHeader;

