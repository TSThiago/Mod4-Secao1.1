let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2') 

const Dividir = () => {
    return <button onClick = {() => alert(num1.value / num2.value)}>Dividir</button>
}

export default Dividir