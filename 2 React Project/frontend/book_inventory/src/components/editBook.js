import React, { useState, useEffect } from "react";
import BookData from "../services/books";

const EditItem = (props) => {

    const initialBookState = {
        title: "",
        author: "",
        description: "",
        price: ""
      }
    
      const [editBook, seteditBook] = useState(initialBookState);
    
    
      const handleImputChange = event => {
        const { name, value} = event.target;
        seteditBook({ ...editBook, [name]: value })
      }

      useEffect(() => {
        retrieveItem();
      }, []);

      const retrieveItem = () => {
          console.log(props.match.params.id);
        BookData.getOne(props.match.params.id)
    .then(res => {
      console.log(res.data);
      
      console.log(res.data[0])
      seteditBook(res.data[0]);
      
    });
      }


    
      const submit = () => {
          console.log(editBook);
        BookData.edit_book(editBook)
        .then(() => {
            props.history.push('/');
        });
        
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
        value ={editBook.title}/> <br/>

<input  
        type="text" 
        id="author" 
        name="author" 
        onChange={handleImputChange} 
        placeholder="Author" 
        value ={editBook.author}/> <br/>

      <input 
        type="text" 
        id="description"  
        name="description" 
        onChange={handleImputChange} 
        placeholder="description" 
        value ={editBook.description}/><br/>

      <input 
        type="text" 
        id="price"  
        name="price" 
        onChange={handleImputChange} 
        placeholder="price" 
        value ={editBook.price}/><br/>

      
      <div className="submit" onClick={submit}>
        Update
      </div>
      </form>
        </div>
    )
      }

      export default EditItem;