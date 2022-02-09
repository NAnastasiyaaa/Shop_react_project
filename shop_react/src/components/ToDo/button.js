import React from "react";
require('./style.css')


const stylesH1 = {
    h11: {
        textAlign: 'center',
        paddingLeft: 100,
        fontSize: 25,
        marginTop: 40,
        position: 'absolute',
        left: 150,
        top: 2220,
        width: 340,
        height: 50,
        padding: 5,
        background: '#faf8f5'
    },
    h12: {
        textAlign: 'center',
        fontSize: 25,
        marginTop: 40,
        position: 'absolute',
        left: 500,
        top: 2220,
        width: 500,
        height: 50,
        padding: 5,
        background: '#faf8f5'
    },
    h13: {
        textAlign: 'center',
        fontSize: 25,
        marginTop: 40,
        position: 'absolute',
        left: 1010,
        top: 2220,
        width: 340,
        height: 50,
        padding: 5,
        background: '#faf8f5'
    }
}

const img1 = require('./4.jpg')
const stylesFoto1 = {
    img1: {
        width: 350,
        paddingTop: 43,
        paddingLeft: 150,
        paddingRigth: 150,
    }
}

const img2 = require('./5.jpg')
const stylesFoto2 = {
    img2:{
        width: 350,
        paddingLeft: 80,
        background: '#faf8f5'
    }
}

const img3 = require('./6.jpg')
const stylesFoto3 = {
    img3:{
        width: 350,
        paddingLeft: 80,
        background: '#faf8f5'
    }
}

const styleText = {
    txt1:{
        fontSize: 13,
        marginTop: 45,
        position: 'absolute',
        left: 1010,
        top: 2260,
        width: 340,
        height: 55,
        padding: 5,
        background: '#faf8f5'
    },
    txt2:{
        textAlign: 'center',
        fontSize: 13,
        marginTop: 40,
        position: 'absolute',
        left: 500,
        top: 2260,
        width: 500,
        height: 60,
        padding: 5,
        background: '#faf8f5'
    },
    txt3:{
        fontSize: 13,
        marginTop: 40,
        position: 'absolute',
        left: 150,
        top: 2260,
        width: 340,
        height: 60,
        padding: 5,
        background: '#faf8f5'
    }
}

function Button() {

function sayHello() {
 let dots = document.getElementById("dots");
 let more = document.getElementById("more");
 let btn = document.getElementById("btn");


if (dots.style.display === "none") {
 dots.style.display="inline";
 btn.innerHTML="More";
 more.style.display="none";
} else {
 dots.style.display="none";
 btn.innerHTML="Less";
 more.style.display="inline";
 }
}
    return (

    <React.Fragment>

<button id="btn" onClick={sayHello}>More</button>
<p><span id="dots"></span>
<div id="more">
<h1 className="text">Buy winter, summer, spring and autumn clothes only from us. Now there are big promotions!</h1>
<p className="textd">Shop the sale online at Zara and stock up on lots of great deals! Discover new marked-down favourites from all our departments; women, men, kids and home. Valid online only for H&M members through 02/09/2022. Discount does not include jeans. Discount will automatically apply on select Men's pants when 3 or 6 pairs are added to your shopping bag. Sale styles excluded. Valid in the US only.</p>
        
        <img src={img1} alt="ft1" style={stylesFoto1.img1} ></img>
        <img src={img2} alt="ft2" style={stylesFoto2.img2} ></img>
        <img src={img3} alt="ft3" style={stylesFoto3.img3} ></img>
        <h1 style={stylesH1.h11}>Winter clothes</h1>
        <h1 style={stylesH1.h12}>Spring clothes</h1>
        <h1 style={stylesH1.h13}>Summer clothes</h1>
        <p1 style={styleText.txt1}>The new winter collection is already on sale. You can choose any clothes you like. Any colors are available.</p1>
        <p1 style={styleText.txt2}>The new spring collection is already on sale. You can choose any clothes you like. Any colors are available. There is also a large selection of sizes.</p1>
        <p1 style={styleText.txt3}>The new summer collection is already on sale. You can choose any clothes you like. Any colors are available.</p1>

</div>
</p>

   </React.Fragment>
    );
  }
  
  export default Button;