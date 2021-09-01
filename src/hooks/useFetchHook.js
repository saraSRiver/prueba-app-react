import { useState,useEffect } from "react"
import { getGifs } from "../helpers/getGifs"

export const useFetchGifs=(categoria) => {
    const [state, setState]=useState({
        data:[],
        loading:true
    });

    useEffect(() => {
        getGifs(categoria).then(imgs=>{
            setState({
                data:imgs,
                loading:false
            });
        })
    }, [categoria])


    // setTimeout (() => {
    //     useState({
    //         data:[1,2,3,4,5,6,7], 
    //         loading:false
    //     })
    // },3000)
    return state;
}