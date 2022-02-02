import React from "react";

const stylesH1 = {
    h11: {
        textAlign: 'center',
        paddingLeft: 100,
        fontSize: 25,
        marginTop: 40,
        position: 'absolute',
        left: 150,
        top: 1225,
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
        top: 1225,
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
        top: 1225,
        width: 340,
        height: 50,
        padding: 5,
        background: '#faf8f5'
    }
}

const img1 = require('./1.jpg')
const stylesFoto1 = {
    img1: {
        width: 350,
        paddingTop: 43,
        paddingLeft: 150,
        paddingRigth: 150,
    }
}

const img2 = require('./2.jpg')
const stylesFoto2 = {
    img2:{
        width: 350,
        paddingLeft: 80,
        // background: '#f7eee1'
        // background: '#e3e3e3'
        // background: '#c7c5c3'
        // background: 'black'
        background: '#faf8f5'
    }
}

const img3 = require('./3.jpg')
const stylesFoto3 = {
    img3:{
        width: 350,
        paddingLeft: 80,
        // background: '#f7eee1'
        // background: '#e3e3e3'
        // background: '#c7c5c3'
        // background: 'white'
        background: '#faf8f5'
    }
}

const styleText = {
    txt1:{
        fontSize: 13,
        marginTop: 45,
        position: 'absolute',
        left: 1010,
        top: 1270,
        width: 340,
        height: 60,
        padding: 5,
        background: '#faf8f5'
    },
    txt2:{
        textAlign: 'center',
        fontSize: 13,
        marginTop: 40,
        position: 'absolute',
        left: 500,
        top: 1270,
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
        top: 1270,
        width: 340,
        height: 60,
        padding: 5,
        background: '#faf8f5'
    }
}
export default function InfFoto() {
    return (
        <React.Fragment>
        <img src={img1} alt="ft1" style={stylesFoto1.img1} ></img>
        <img src={img2} alt="ft2" style={stylesFoto2.img2} ></img>
        <img src={img3} alt="ft3" style={stylesFoto3.img3} ></img>
        <h1 style={stylesH1.h11}>Men's clothing</h1>
        <h1 style={stylesH1.h12}>Women's clothes</h1>
        <h1 style={stylesH1.h13}>Children's clothing</h1>
        <p1 style={styleText.txt1}>The new children's court collection is already on sale. You can choose any clothes you like. Any colors are available.</p1>
        <p1 style={styleText.txt2}>The new children's court collection is already on sale. You can choose any clothes you like. Any colors are available. There is also a large selection of sizes.</p1>
        <p1 style={styleText.txt3}>The new men's court collection is already on sale. You can choose any clothes you like. Any colors are available.</p1>
        </React.Fragment>
    )
}