import React from 'react';
import "./newsletter.scss";

// Imagens


class Newsletter extends React.Component {
   render() {
      return (
         <div id="Newsletter">
            <div className="container newsletter">
               <h2>
                  Participe de nossas news com promoções e novidades!
            </h2>
               <form className="cadastro" action="">
                  <input placeholder="Digite seu nome" type="text" />
                  <input placeholder="Digite seu email" type="email" name="" id="" />
                  <button type="submit">Eu quero!</button>
               </form>
            </div>
         </div>
      );
   }
}



export default Newsletter;
