import React from 'react';
import descriptionGirl from "./images/girl.jpg";
import './ImgDesc.css'


function ImgDesc() {
  return <div className='image'>
      <img className="girl_image" src={descriptionGirl} alt='description_image'/>
  </div>;
}

export default ImgDesc;
