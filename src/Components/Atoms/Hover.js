import { useState } from 'react';

function Hover(Component){
    const Message = (props) => {
        const [display, setDisplay] = useState(false)
        
        return <Component {...props} OnMouseOver={() => setDisplay(true)} OnMouseOut={() => setDisplay(false)} status={display}></Component>
    } 

    return (
        Message
    )
}

export default Hover;