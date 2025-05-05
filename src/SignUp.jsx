import React, { useState } from 'react'
import axios from 'axios'

function SignUp() {
  const [username , setUserName] = useState('');
  const[email , setEmail] = useState('');
  const[password , setPassword] = useState('');

 const register = () =>{
    const obj = {
      username,
      email,
      password
    }
    try{
      axios.post('http://localhost:8000/auth/register' ,obj)
      alert("register succesfully")
    }catch(error){
      console.log(error.message)
    }
    }
  return (
    <>
    
    <h1 style={{display:'flex', justifyContent:'center' , alignItems:'center' }}>Register</h1>
    <div style={{display:'flex', justifyContent:'center' , alignItems:'center' }}>
       
        <br/>
        
        <form action="">
              <input type="text" placeholder='username' style={{margin:'5px'}} value={username}    onChange={(e)=>setUserName(e.target.value)    }/><br/>
              <input type="email" placeholder='emai' style={{margin:'5px'}} value={email}  onChange={(e)=>setEmail(e.target.value)}/><br/>
              <input type="password" placeholder='password' style={{margin:'5px'}} value={password}  onChange={(e)=>setPassword(e.target.value)} /><br/>
              <button style={{margin:'10px'}} onClick={register}>Submit</button>
          </form>
    </div>
   
    
    
    </>
   
  )
}

export default SignUp