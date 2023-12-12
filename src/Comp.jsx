import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
export default function Comp() {

    const [text, setText]=useState("")
    const [updated, setUpdate]=useState("")
    const textOnChange = (event) => {
        setText(event.target.value)
    }
    const buttonOnClick = (event) => {
        setUpdate(text)
    }
return (
    <div>
        <input type="text" value={text} onChange={textOnChange}/>
    <button onClick={buttonOnClick}>actualizar</button>
    <p>texto input: {text}</p>
    <p>texto actualizado: {updated}</p>

    </div>
)
}


