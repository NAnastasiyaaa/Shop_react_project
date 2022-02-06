import React from 'react';

const items = require('./styleItems.css')
const itemss = [items];
const img1 = require('./1.jpg')
const Items1 = itemss.map((style) =>
<div style={style} class="product-item">
  <img src={img1}/>
  <div class="product-list">
    <h3>Coat warm wool Premium - Limited edition</h3>
    <h4>Warm coat made of high quality mixed woolen fabric with lapels and long sleeves. Fastens with hidden buttons.</h4>
      <span class="price">5 299 UAH</span>
      <a href="" class="button">View more</a>
  </div>
</div>
)

const img2 = require('./2.jpg')
const Items2 = itemss.map((style) =>
<div class="product-item">
  <img src={img2}/>
  <div class="product-list">
    <h3>Shirt with leaves</h3>
    <h4>Standard satin shirt with Italian collar, short sleeves and side slits at the bottom. Fastens with buttons on the front.</h4>
      <span class="price">1 499 UAH</span>
      <a href="" class="button">View more</a>
  </div>
</div>
)

const img3 = require('./3.jpg')
const Items3 = itemss.map((style) =>
<div class="product-item">
  <img src={img3}/>
  <div class="product-list">
    <h3>Lightweight basic t-shirt</h3>
    <h4>Lightweight basic T-shirt with a round collar and short sleeves. Made of cotton.</h4>
      <span class="price">499 UAH</span>
      <a href="" class="button">View more</a>
  </div>
</div>
)

const img4 = require('./4.jpg')
const Items4 = itemss.map((style) =>
<div class="product-item">
  <img src={img4}/>
  <div class="product-list">
    <h3>Striped t-shirt Premium</h3>
    <h4>T-shirt with a round collar in the hem and long sleeves. Consignment note front pocket.</h4>
      <span class="price">299 UAH</span>
      <a href="" class="button">View more</a>
  </div>
</div>
)

function Items() {
    return <div>
        <div>{Items1}</div>
        <div>{Items2}</div>
        <div>{Items3}</div>
        <div>{Items4}</div>
        
    </div>
  }
  
  export default Items;

  