import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Login() {
    const[email , setEmail] = useState('');
    const[password , setPassword] = useState('');

   const navigate = useNavigate()
    const login = (e) =>{
        e.preventDefault()
        const obj = {
            email,
            password
          }
          try{
            axios.post('http://localhost:8000/auth/login' ,obj)
            alert("Login succesfully")
         navigate('/Home')
          }catch(error){
            console.log(error.message)
          }
          }
  return (
    <>
    <h1 style={{display:'flex', justifyContent:'center' , alignItems:'center' }}>Login</h1>
    <div style={{display:'flex', justifyContent:'center' , alignItems:'center' }}>
       
        <br/>
        
        <form action="">
          
              <input type="email" placeholder='email' style={{margin:'5px'}} value={email}  onChange={(e)=>setEmail(e.target.value)}/><br/>
              <input type="password" placeholder='password' style={{margin:'5px'}} value={password}  onChange={(e)=>setPassword(e.target.value)} /><br/>
              <button style={{margin:'10px'}} onClick={login}>Submit</button>
          </form>
    </div>
   
    </>
  )
}

export default Login