function Input(props){
    return (
    <input onChange={(value) => props.onText(value)} type='text' />
    )
}

export default Input;