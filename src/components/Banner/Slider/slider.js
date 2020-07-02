import React, { useState } from 'react';
import './slider.scss';

import ImgComp from './imgComp'

import i0 from './images/image-0.png'
import i1 from './images/image-1.jpg'
import i2 from './images/image-2.jpg'

function Slider() {
   let arraySlider = [
      <ImgComp src={i0} />,
      <ImgComp src={i1} />,
      <ImgComp src={i2} />
   ];

   const [x, setX] = useState(0);
   const goLeft = () => {
      x === 0 ? setX(-100 * (arraySlider.length - 1)) : setX(x + 100);
   };
   const goRight = () => {
      x === -100 * (arraySlider.length - 1) ? setX(0) : setX(x - 100);
   };

   return (
      <div className="slider">
         {
            arraySlider.map((item, index) => {
               return (
                  <div
                     key={index}
                     className="slide"
                     style={{ transform: `translateX(${x}%)` }}>
                     {item}

                  </div>

               )
            })
         }


         {/* <div className="texto">
            <h3 className="subtitulo">
               Olá, o que você está buscando?
               </h3>
            <h1 className="titulo">
               Criar ou migrar seu e-commerce?
               </h1>
         </div> */}

         <button id="goLeft" onClick={goLeft}>
            <i className="fas fa-chevron-left"></i>
         </button>
         <button id="goRight" onClick={goRight}>
            <i className="fas fa-chevron-right"></i>
         </button>
      </div>
   )
}



export default Slider;
