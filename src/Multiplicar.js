let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2') 

const Multiplicar = () => {
    return <button onClick = {() => alert(num1.value * num2.value)}>Multiplicar</button>
}

export default Multiplicar