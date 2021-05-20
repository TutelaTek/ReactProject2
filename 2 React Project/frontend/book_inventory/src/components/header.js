import React from "react";
import { NavLink } from "react-router-dom";


const Header = () => {
    return(
<div className="App">
      <nav>
      
        <ul>
          <li>
          <NavLink to={"/"} className="nav-link">
            Books
          </NavLink>
         </li>
         <li>
          <NavLink to={"/createBook"} className="nav-link">
            Add Book
          </NavLink>
         </li>
        </ul>
      </nav>

      {/* React Router */}
      </div>
    )
      }

      export default Header;