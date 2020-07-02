import React from 'react';
import "./banner.scss";

import Slide from './Slide/slide'

class Banner extends React.Component {
   render() {
      return (
         <div id="Banner">
            <Slide />
         </div>
      );
   }
}

export default Banner;
