import React, { useState } from 'react'
import { Showincrement } from './Showincrement';


export const CallbackHook = () => {

    const [state, setState]=useState(10);
    const increment =() =>{
        setState(state + 1);
    }
    return (
        <div>
            <h1>useCallback Hook</h1>
            <hr/>
            <Showincrement   increment={increment}/>
        </div>
    )
}
