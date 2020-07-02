import React from 'react';

function imgComp({ src }) {
   let imgStyles={
      width: 100 + "%",
      height: "auto"
   };
   return <img src={src} alt="slide-img" style={imgStyles}/>
};
export default imgComp;