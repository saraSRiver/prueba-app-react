import  React, { useEffect, useState } from 'react'
import { useForm } from '../../hooks/useForm';
import './effects.css'

export const FormWithCustomHook = () =>{
   const [formValues, handleInputChange]= useForm ({
       name:'',
       email:'',
       password: ''
   })
   
   const {name, email, password}= formValues;  
   
   useEffect(() => {
       console.log('el email cambio')
   }, [email])
    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(formValues);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>FormWithCustomHook</h1>
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

            <div className="form-group">
                <input type="password" name="password" classmate="form-control"
                placeholder="constrasena"
                autoComplete="off"
                vale= {password}
                onChange={handleInputChange}
                />
            </div>
            <button type="submit" className="btn btn-primary">Guardar</button>
        </form>
    )
    
}