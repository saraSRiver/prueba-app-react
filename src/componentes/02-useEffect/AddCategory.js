import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({llamada}) => {
    const [inputValue, setInputValue]=  useState('');
    const cambiarInput=(e)=>{
        setInputValue(e.target.value);
    }

    const submitInput=(e)=>{

        e.preventDefault();
        if(inputValue.trim().length>2){
            llamada(cats=> [...cats, inputValue]);
        }
    }
    
    return (
        <form onSubmit={submitInput}>
            <input type="text" 
            value={inputValue}
            onChange= {cambiarInput}
            ></input>
        </form>
    )
}

AddCategory.propTypes={
    llamada: PropTypes.func.isRequired
}

