import React from 'react';
import "./vitrine.scss";
import CardProduto from './CardProduto/cardProduto'

// Imagens


class Vitrine extends React.Component {
   render() {
      return (
         <section id="Vitrine">
            <div className="container">
               <h1 className="titulo">Mais Vendidos</h1>
               <hr/>
               <CardProduto />
            </div>
         </section>
      );
   }
}



export default Vitrine;
