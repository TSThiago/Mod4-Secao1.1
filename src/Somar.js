let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2') 

const Somar = () => {
    return <button onClick = {() => alert(parseInt(num1.value) + parseInt(num2.value))}>Somar</button>
}

export default Somar
