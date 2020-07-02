import React from 'react';
import "./search.scss";

// Imagens

class Search extends React.Component {
   render() {
      return (
         <form action="search" id="Search" className="search">
            <input className="input-search" type="text" />
            <button className="button-search" type="submit">
               <i className="fas fa-search"></i>
            </button>
         </form>
      );
   }
}



export default Search;
