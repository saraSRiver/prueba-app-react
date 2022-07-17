import React, { useRef } from 'react'
import { ReactDOM } from 'react'
import '../02-useEffect/effects.css'

export const FocusScreen = () => {

    const inputRef = useRef();
    

    const handleClick=() =>{
        // document.querySelector('input').focus();
        inputRef.current.select();
    }
    return (
        <div>
            <h1>FocusScreen</h1>
            <hr/>
        <input className="form-control"
        placeholder="tu nombre"
        ref={inputRef}
        />

        <button classname="btn btn-outline-primary mt-5" 
        onClick={handleClick}>
            Focus
        </button>

        </div>
    )
}
