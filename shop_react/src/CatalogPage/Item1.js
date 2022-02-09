import React from 'react';

require('./style.css')
const img1 = require('./1.jpg')
const imgstl = {
    stl:{
        width: 400,
        paddingLeft: 140,
        marginBottom: 100,
    }
}

const txtstl = {
    stl1:{
        fontSize: 35,
        marginRigth: 100
    }
}

function Item1() {
    return <div>
        <img src={img1} align ="left" style={imgstl.stl}/>
        <button id="btn1">Description 1</button>
        <button id="btn2">Description 2</button>
        <h1 style={txtstl.stl1}>⠀⠀⠀Coat warm wool Premium - Limited edition</h1>
        <p className='txt'>Warm coat made of high quality mixed woolen fabric with lapels and long sleeves. Fastens with hidden buttons.</p>
        <p className='txt'>Countable field</p>
        <input></input>
        <p className='txt2'>Selectable Field</p>

        <select class="box">
      <option>S</option>
      <option>XS</option>
      <option>M</option>
      <option selected>none</option>
    </select>

    <button id="btn3">Go back</button>
    <button id="btn4">Add to cart</button>
    <strong><h2>Price: 4500 UAH</h2></strong>
    </div>
    
  }
  
  export default Item1;