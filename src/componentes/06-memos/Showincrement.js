import React from 'react'

export const Showincrement = ({increment}) => {
    console.log('deja de llamarme >:(');
    return (
        <div>
            <button className= "btn btn-primary"
            onClick={ () => {
                increment();
            }}
            >
            incrementar
                </button>
        </div>
    )
}
