import React from 'react';
import "./banner.scss";

import Slider from './Slider/slider'

// import fundo from './Slider/images/banner.png'

class Banner extends React.Component {
   render() {
      return (
         <div id="Banner">
            <Slider className="sliderComp" />
            {/* <img className="fundo" src={fundo} alt=""/>
            <div className="container">
               <div className="texto">
                  <h3 className="subtitulo">
                     Olá, o que você está buscando?
               </h3>
                  <h1 className="titulo">
                     Criar ou migrar seu e-commerce?
               </h1>
               </div>
            </div> */}
         </div>
      );
   }
}

export default Banner;
