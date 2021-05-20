import React, { useState, useEffect } from "react";
import BookData from "../services/books";

const Newbook = () => {

    const initialBookState = {
        title: "",
        author: "",
        description: "",
        price: ""
      }
    
      const [newbook, setnewbook] = useState(initialBookState);
    
    
      const handleImputChange = event => {
        const { name, value} = event.target;
        setnewbook({ ...newbook, [name]: value })
      }
    
      const submit = () => {
          console.log(newbook);
        BookData.postBook(newbook);
        setnewbook(initialBookState);
      }

    return(
        <div className="App content">
    
    <form id=""  >
      <input  
        type="text" 
        id="title" 
        name="title" 
        onChange={handleImputChange} 
        placeholder="Title" 
        value ={newbook.title}/> <br/>

<input  
        type="text" 
        id="author" 
        name="author" 
        onChange={handleImputChange} 
        placeholder="Author" 
        value ={newbook.author}/> <br/>

      <input 
        type="text" 
        id="description"  
        name="description" 
        onChange={handleImputChange} 
        placeholder="description" 
        value ={newbook.description}/><br/>

      <input 
        type="text" 
        id="price"  
        name="price" 
        onChange={handleImputChange} 
        placeholder="price" 
        value ={newbook.price}/><br/>

      
      <div className="submit" onClick={submit}>
        Submit
      </div>
      </form>
        </div>
    )
      }

      export default Newbook;