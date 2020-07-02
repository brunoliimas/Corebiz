import React from 'react';
import "./nav.scss";
import { useMediaQuery } from 'react-responsive';

// Imagens
// import logo from './images/logo_corebiz.svg'
// import carrinho from './images/carrinho.svg'

const links = [{
   to: '/',
   text: 'Home'
}, {
   to: '/minha-conta',
   text: 'Minha conta'
}]

const Nav = () => {
   const isBigEnough = useMediaQuery({ query: "(min-width: 575px)" });

   const [open, setOpen] = React.useState();
   const appLinks = links.map(l => (
      <a
         key={l.to}
         href={l.to}
         className="nav-link">
         {l.text}
      </a>
   ))
   return (
      <nav id="Nav" className="nav-bar">
         {isBigEnough ? (
            <div className="nav-big">
               {appLinks}
            </div>

         ) : (
               <div className="nav-small">
                  <button
                     className="nav-small_button"
                     onClick={() => setOpen(o => !o)}
                     style={{ display: open ? "block" : "none" }}>
                     <i className="fas fa-bars"></i>
                  </button>
                  <div className="nav-small_links" style={{ display: open ? "block" : "none" }}>
                     {appLinks}
                  </div>
               </div>
            )}

      </nav>
   );

}


export default Nav;
