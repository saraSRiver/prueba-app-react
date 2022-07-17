import React, { memo } from 'react'

export const Small = memo(({value}) => {
    console.log('deja de llamarme');
    return (
        <small>{value}</small>
    )
})
