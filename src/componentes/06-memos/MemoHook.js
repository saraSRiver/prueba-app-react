import React, { useMemo, useState } from 'react';
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter';


export const MemoHook = () => {

    const {state, increment}=useCounter(10);
    const [show, setShow]=useState(true);
       
       const memoPesado= useMemo(()=> procesoPesado(state), [state]);
    
    return (
        <div>
            <h1>MemoHook</h1>
            <h1>Counter: <small>{state}</small></h1>
            <hr/>
            <p>{memoPesado}</p>
            <button className= "btn btn-primary"
            onClick={increment}
            >
                +1
                </button>
                <button 
                className= "btn btn-primary"
                onClick={ ()=>{ setShow(!show)} }
                >
                show/hide {JSON.stringify(show)}
                </button>
        </div>
    )
}
