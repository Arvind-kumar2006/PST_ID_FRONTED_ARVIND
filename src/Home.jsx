import React, { useState } from 'react'
import axios from 'axios'
function Home() {
    const[title , setTitle] = useState('')
    const[author , setAuthor] = useState('')
    const[genre , setGenre] = useState('')
    const[year , setYear] = useState('')

  
    const BookInsert = () =>{
    
        const obj = {
            title , 
            author,
            genre,
            year
        }
        try{
            axios.post('http://localhost:8000/insert/Books',obj)
            alert("insert succesfully")
        }catch(error){
            console.log(error)
        }
    }


  return (
    <>
    <h1 style={{display:'flex', justifyContent:'center' , alignItems:'center' }}>ADD BOOKS</h1>
    <div style={{display:'flex', justifyContent:'center' , alignItems:'center' }}>
       
        <br/>
        
        <form action="">
          
              <input type="text" placeholder='Title' style={{margin:'5px'}} value={title}  onChange={(e)=>setTitle(e.target.value)}/><br/>
              <input type="text" placeholder='Author' style={{margin:'5px'}} value={author}  onChange={(e)=>setAuthor(e.target.value)} /><br/>
              <input type="text" placeholder='Genre' style={{margin:'5px'}} value={genre}  onChange={(e)=>setGenre(e.target.value)} /><br/>
              <input type="text" placeholder='Year' style={{margin:'5px'}} value={year}  onChange={(e)=>setYear(e.target.value)} /><br/>
              <button style={{margin:'10px'}} onClick={BookInsert}>Submit</button>
          </form>
    </div>
   
    </>
  )
}

export default Home