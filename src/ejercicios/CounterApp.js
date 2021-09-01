import React, {useState} from 'react';
import PropTypes from 'prop-types'

const CounterApp = ({value}) => {
    const [counter, setCounter]= useState(value);
    const resta= ()=>setCounter(counter -1);
    const reseteo= ()=>setCounter(value);
    const suma = ()=>setCounter(counter +1);
    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <button onClick={suma}>+1</button>
            <button onClick={resta}>-1</button>
            <button onClick={reseteo}>reset</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number,
}

export default CounterApp;
