import Hover from "./Hover";

function Input({onText, OnMouseOver, OnMouseOut, status}){
    return (
    <>
    <input onMouseOver={OnMouseOver} onMouseOut={OnMouseOut} onChange={(value) => onText(value)} type='text' />
    {status ?<p>Digite um número</p> : null}
    </>
    )
}

export default Hover(Input);