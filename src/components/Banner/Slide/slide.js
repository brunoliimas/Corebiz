import React, { Component } from "react";
import Slider from "react-slick";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './slide.scss';

import image0 from './images/image-0.png'
import image1 from './images/image-1.jpg'
import image2 from './images/image-2.jpg'


export default class SimpleSlider extends Component {
   render() {
      const settings = {
         dots: true,
         infinite: true,
         speed: 500,
         slidesToShow: 1,
         slidesToScroll: 1
      };
      return (
         <div>
            <Slider {...settings}>
               <div>
                  <img src={image0} alt="" />
               </div>
               <div>
                  <img src={image1} alt="" />
               </div>
               <div>
                  <img src={image2} alt="" />
               </div>
            </Slider>
         </div>
      );
   }
}