import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BooksData from "../services/books";
import plus from '../images/plus.png';
import '../styles/books.css';


const Inventory = props => {
  // set State hooks
  const [books, setbooks] = useState([]);

  // use effect
  useEffect(() => {
    retrieveBooks();
  }, []);


  const retrieveBooks = () => {
    // get all items  then setMenuItems
    BooksData.getAll()
    .then(res => {
      console.log(res.data);
      setbooks(res.data);
    });
  }

  function deleteBook(id){
    
    BooksData.delete(id)
    .then(() => {
      window.location.reload(false);
    });

    
  }

 
  return (
    // map through the array of menu objects
    
    <div className="card-holder ">
      <Link to="/createBook">
      <div className="items addCard" >
         <img src={plus} alt="plus"/>
      </div> 
      </Link>
      {books.map((item ) => {
        return(
      <div  key={item._id} >
        
        <div className="items" >
        <div className="closing" onClick={() => deleteBook(item._id)}>X</div>
        <Link to={"/editMenuItem/" + item._id} >
          <div className="items-info">
          <h3 className="title">{item.title}</h3>
          <div className="book-info">
          <p className="author linestyle">{item.author}</p>
          <p className="description linestyle">{item.description}</p>
          <div className="price linestyle">${item.price}</div>
          </div>
          </div>
          </Link>
       </div>
      
    </div>
      )})}
    </div>
  );
}

export default Inventory;