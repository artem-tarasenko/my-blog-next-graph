import React, { useState, useEffect } from "react";
import menuStyles from "./Menu/MenuDesktop.module.css";
import MenuDesktop from "./Menu/MenuDesktop.jsx";
import MenuMobile from "./Menu/MenuMobile.jsx";

function Header(props) {
    const [isMobile, setIsMobile] = useState(false)

    //location for useEffect func below
    let location = '';

    useEffect( () => {
        location = window.location.href.split('/');
        const button = document.querySelector(`.${location[3] ? location[3] : 'home'}-button`);
        button.classList.add(`${menuStyles.active}`);
        // isMobile = window.innerWidth <= 640;
        setIsMobile( () => window.innerWidth <= 640)
        console.log("Menu - isMobile: ", isMobile)
    },[])
    


    return  <React.Fragment>
                { isMobile ? <MenuMobile /> : <MenuDesktop />}
            </React.Fragment>
}

export default Header;