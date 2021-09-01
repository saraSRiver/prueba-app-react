import React from 'react';
import PropTypes from 'prop-types';

const PrimerApp = ({valor}) => {

    // const valor="Semi";
    
    return (
        <>
            <h2>{valor}</h2>
            <p>Mi primera app</p>
        </>
    );

}
PrimerApp.propTypes={
    valor: PropTypes.string
}

export default PrimerApp;