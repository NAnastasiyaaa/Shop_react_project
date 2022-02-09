import React from "react";
import logo from "./logo_page.jpg";
import facebook from "./facebook.png";
import twitter from "./twitter.png";
import linkedin from "./linkedin.png";
import googleplus from "./google-plus.png";

const styleTextFooter = {
    txt: {
        clear: 'both',
        textAlign: '',
        paddingLeft: 160,
        fontSize: 20,
    },
    txt1: {
        clear: 'both',
        textAlign: 'left',
        paddingLeft: 160,
        fontSize: 10,
        left: 150,
        width: 340,
        height: 0,
    },
    img:{
        clear: 'both',
        position: 'absolute',
        paddingBottom: 10,
        left: 690,
    },
    imgFacebook:{
        position: 'absolute',
        width: 35,
        left: 1245,
    },
    imgTwitter:{
        position: 'absolute',
        width: 35,
        left: 1300,
    },
    imgLinkedin:{
        position: 'absolute',
        width: 35,
        left: 1355,
    },
    imgGooglePlus:{
        position: 'absolute',
        width: 35,
        left: 1410,
    },
    hr:{
        clear: 'both',
    }
}

export default function Footer() {
    return (
        <React.Fragment>
   
        &emsp;
        <p>⠀</p>
        <p>⠀</p>
        <hr style={styleTextFooter.hr}></hr>
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


