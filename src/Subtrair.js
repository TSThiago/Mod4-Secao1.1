let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2') 

const Subtrair = () => {
    return <button onClick = {() => alert(num1.value - num2.value)}>Subtrair</button>
}

export default Subtrair