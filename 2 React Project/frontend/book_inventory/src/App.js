import React from "react";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom'; 
import Header from "./components/header";
import Books from "./components/books";
import AddBook from "./components/addBook";
import EditBook from "./components/editBook";
import './App.css'


function App() {
  /* React hook */
 
  return (
    <Router> 
    <div className="App">
      <Header />
        <Switch>
      
          <Route
            path= "/createBook"
            render= {(props) => (
              <AddBook {...props}  /> 
            )}
          />

          <Route
            path= "/editMenuItem/:id"
            render= {(props) => (
              <EditBook {...props}  /> 
            )}
          />

          <Route
            path= "/"
            render= {(props) => (
              <Books {...props}  /> 
            )}
          />
        </Switch>
      </div>
    
    </Router>
  );
}

export default App;
