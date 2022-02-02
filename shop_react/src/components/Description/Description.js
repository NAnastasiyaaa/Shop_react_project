import React from 'react';
import ImgDesc from './ImgDesc/ImgDesc';
import TextDesc from './TextDesc/TextDesc';
import './Description.css'


function Description() {
  return <div className='blockComponent'>
      <ImgDesc/>
      <TextDesc/>
  </div>;
}

export default Description;
