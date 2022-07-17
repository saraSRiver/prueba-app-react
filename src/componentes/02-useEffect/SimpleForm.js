import  React, { useEffect, useState } from 'react'
import './effects.css'

export const SimpleForm = () =>{
   const [formState, setFormState]= useState ({
       name:'',
       email:''
   })
   const {name, email}=formState;
    useEffect(() => {
        console.log('hello')
    
    })

    const handleInputChange =(target)=>{
        setFormState({
            ...formState,
            [target.name]:target.value
        })
    }
    return (
        <>
            <h1>useEffect</h1>
            <hr/>
            <div className="form-group">
                <input type="text" name="name" classmate="form-control"
                placeholder="tu nombre"
                autoComplete="off"
                vale= {name}
                onChange={handleInputChange}
                />

            </div>

            <div className="form-group">
                <input type="text" name="email" classmate="form-control"
                placeholder="email@tuputamdr.com"
                autoComplete="off"
                vale= {email}
                onChange={handleInputChange}
                />

            </div>
        </>
    )
    
}