import React, { useState } from 'react'
import { MultipleCustomsHooks } from '../03-ejemplos/MultipleCustomsHooks';

export const RealExampleRef = () => {
     const [show, setShow] = useState (false)

    return (
        <div>
            <h1>RealExampleRef</h1>
            {show && <MultipleCustomsHooks/>}
            <button
                className= "btn btn-primary mt-5"
                onClick={ ()=> {
                    setShow(!show)
                }}
                >
                    show/hide
            </button>
        </div>
    )
}
