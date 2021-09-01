import React, {useState} from 'react'
import { AddCategory } from './componentes/AddCategory';
import { GIFGrid } from './componentes/GIFGrid';

export const GifExpertApp = () => {
    // const categorias= ['Yuri on ice', 'Parasyte', 'Los Simpsons'];
    const [categorias,setCategorias]=useState(['Yuri on ice']);
    // const addCategory= ()=>{
    //     setCategorias([...categorias, 'Banana Fish']);
    // }

    return (
        <>
           <h2>GifExpertApp</h2>
            <AddCategory llamada={setCategorias}/>
           <hr/>
           
           <ul>
               {
                  categorias.map(
                      category =>
                        (<GIFGrid 
                            key={category}
                            categoria={category}
                        />
                        ))
                
               }
               
           </ul>
        </>
    )
}


