import React from "react";
import logo from "./logo_page.jpg";
import facebook from "./facebook.png";
import twitter from "./twitter.png";
import linkedin from "./linkedin.png";
import googleplus from "./google-plus.png";

const styleTextFooter = {
    txt: {
        textAlign: 'left',
        paddingLeft: 100,
        fontSize: 20,
        marginTop: 40,
        position: 'absolute',
        left: 150,
        top: 1625,
        width: 340,
        height: 50,
        padding: 5,
        background: 'white',
    },
    txt1: {
        textAlign: 'left',
        paddingLeft: 100,
        fontSize: 10,
        marginTop: 40,
        position: 'absolute',
        left: 150,
        top: 1665,
        width: 340,
        height: 50,
        padding: 5,
        background: 'white',
    },
    img:{
        position: 'absolute',
        left: 690,
        marginTop: 30
    },
    imgFacebook:{
        position: 'absolute',
        width: 35,
        left: 1245,
        marginTop: 40
    },
    imgTwitter:{
        position: 'absolute',
        width: 35,
        left: 1300,
        marginTop: 40
    },
    imgLinkedin:{
        position: 'absolute',
        width: 35,
        left: 1355,
        marginTop: 40
    },
    imgGooglePlus:{
        position: 'absolute',
        width: 35,
        left: 1410,
        marginTop: 40
    }
}

export default function Footer() {
    return (
        <React.Fragment>
        <hr></hr>
        <h1 style={styleTextFooter.txt}>Privacy</h1>
        <p style={styleTextFooter.txt1}>The content of this site is copyright-protected and is the property of ZARA. ZARA is committed to accessibility. That commitment means ZARA embraces WCAG</p>
        <img className="logo_image" style={styleTextFooter.img} src={logo} alt="Logo" />
        <a href="facebook.com"><img style={styleTextFooter.imgFacebook} src={facebook} alt="Facebook"/></a>
        <a href="twitter.com"><img style={styleTextFooter.imgTwitter} src={twitter} alt="Twitter"/></a>
        <a href="linkedin.com"><img style={styleTextFooter.imgLinkedin} src={linkedin} alt="Linkedin"/></a>
        <a href="google-plus.com"><img style={styleTextFooter.imgGooglePlus} src={googleplus} alt="Google-Plus"/></a>
        </React.Fragment>
    )
}


