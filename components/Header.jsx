import React, { useState, useEffect } from "react";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import MenuDesktop from "./Menu/MenuDesktop.jsx";
import MenuMobile from "./Menu/MenuMobile.jsx";

function Header(props) {
    const [isMobile, setIsMobile] = useState(false);
    const [isActive, setIsActive] = useState(false);

    useEffect( () => {
    // isMobile = window.innerWidth <= 640;
        setIsMobile( () => window.innerWidth <= 640)
    }, [])

    function showMenu() {
        setIsActive(true);
    }

    function hideMenu() {
        setIsActive(false)
    }

    return  <React.Fragment>
                { !isActive ? <button onClick={showMenu} className="text-gray-700 z-10 left-0 self-end m-2 p-2"><MenuIcon fontSize="large" /></button> : null }
                { isActive ? <button onClick={hideMenu} className="text-gray-100 z-30 left-0 self-end m-2 p-2"><CloseIcon fontSize="large" /></button> : null }
                { isMobile ? <MenuMobile isActive={isActive} handleHiding={hideMenu} /> : <MenuDesktop />}
            </React.Fragment>
}

export default Header;
