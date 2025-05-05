import React from 'react'

function SignUp() {
  return (
    <>
    
    <h1 style={{display:'flex', justifyContent:'center' , alignItems:'center' }}>Register</h1>
    <div style={{display:'flex', justifyContent:'center' , alignItems:'center' }}>
       
        <br/>
        
        <form action="">
              <input type="text" placeholder='username' style={{margin:'5px'}}/><br/>
              <input type="email" placeholder='emai' style={{margin:'5px'}}/><br/>
              <input type="password" placeholder='password' style={{margin:'5px'}} /><br/>
              <button style={{margin:'10px'}}>Submit</button>
          </form>
    </div>
   
    
    
    </>
   
  )
}

export default SignUp