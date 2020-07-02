import React from 'react';
import "./header.scss";

import Navbar from './Nav/nav'
import Search from './Search/search'

// Imagens


class Header extends React.Component {
   render() {
      return (
         <header id="Header" className="header">
            <Navbar />
            {/* <Search /> */}
         </header>
      );
   }
}



export default Header;
