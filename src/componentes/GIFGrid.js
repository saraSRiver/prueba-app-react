import React, {useEffect,useState} from 'react'
import PropTypes from 'prop-types'
import {GifGridItem} from './GifGridItem'
// import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchHook';

export const GIFGrid = ({categoria}) => {

    const {data:images, loading}=useFetchGifs(categoria);

    return (
        <>
            <h3>{categoria}</h3>
            {loading && <p>Cargando</p>}
            <div className="card-grid"> 
                {images.map(img =>(
                    <GifGridItem 
                        key={img.id}
                        {...img}
                    />
                ))} 
            </div> 
        </>
       
    )
}


