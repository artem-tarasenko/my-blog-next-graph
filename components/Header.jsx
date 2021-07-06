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

    const Title = () => <>
        <div className="mobile-title z-10 text-gray-800 self-center ml-6 uppercase"><h2>{props?.content}</h2></div>
    </>

    console.log("is Mobile", isMobile);
    console.log("is Active", isActive)

    return  <React.Fragment>
                {/* { isMobile ? <MenuMobile isActive={isActive} handleHiding={hideMenu} /> : <MenuDesktop />}  
                <div className="flex justify-between border-b-2 border-opacity-20 border-gray-500 z-10 mx-4">
                    { isMobile  
                        ? props.title 
                            ? <Title content={props.content} /> : null 
                        : null }
                    { !isActive ? <button onClick={showMenu} className="text-gray-700 z-10 left-0 self-end my-2 p-2"><MenuIcon fontSize="large" /></button> : null }
                    { isActive ? <button onClick={hideMenu} className="text-gray-100 z-30 left-0 self-end my-2 p-2"><CloseIcon fontSize="large" /></button> : null }
                </div> */}
                

                {isMobile 
                    ? <>
                        <MenuMobile isActive={isActive} handleHiding={hideMenu} />
                        <div className={`flex justify-between z-10 mx-4 ${props.content ? 'border-b-2 border-opacity-20 border-gray-500' : ''}`}>
                            {props.title ? <Title content={props.content} /> : null }
                            { !isActive ? <button onClick={showMenu} className="text-gray-700 z-10 left-0 self-end my-2 p-2"><MenuIcon fontSize="large" /></button> : null }
                            { isActive ? <button onClick={hideMenu} className="text-gray-100 z-30 left-0 self-end my-2 p-2"><CloseIcon fontSize="large" /></button> : null }
                        </div>
                    </>
                    : <MenuDesktop />
                }


            </React.Fragment>
}

export default Header;
