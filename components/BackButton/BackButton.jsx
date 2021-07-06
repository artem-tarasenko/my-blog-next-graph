import React from "react";
import styles from "./BackButton.module.css";

export default function BackButton( props ) {

    function scroll() {
        document.querySelector(".main-menu").scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
        
    return <>
        <div className="flex justify-center">
            { props.link ? <>
                <div className={`${styles.buttonBack} flex items-center bg-white mx-2 -ml-8`} >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.68 28.71">
                        <g>
                            <path class="cls-1" d="M17.71,28.71a2.5,2.5,0,0,1-1.62-.6L0,14.35,16.09.6a2.5,2.5,0,0,1,3.25,3.8L7.7,14.35l11.64,10a2.5,2.5,0,0,1-1.63,4.4Z"/>
                            <path class="cls-1" d="M25.18,17H5.2a2.5,2.5,0,0,1,0-5h20a2.5,2.5,0,0,1,0,5Z"/>
                        </g>
                    </svg>
                    
                    <a className="text-gray-400 font-semibold" href={props.link}>TO LIST</a>
                </div> </> : null
            }
            { props.top ? <>
                <div className={`${styles.buttonTop} flex items-center bg-white mx-2`} >
                    <a className="text-gray-400 font-semibold" onClick={scroll}>TO TOP</a>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34.74 23.57">
                        <g>
                            <path class="cls-1" d="M32.23,14.6a2.49,2.49,0,0,1-1.5-.51L20.38,6.27,10,14.09a2.5,2.5,0,1,1-3-4L20.38,0,33.74,10.1a2.5,2.5,0,0,1-1.51,4.5Z"/>
                            <path class="cls-1" d="M23,23.57l-2.55-.05-18-.32A2.51,2.51,0,0,1,0,20.65,2.47,2.47,0,0,1,2.54,18.2L18,18.48V6.24a2.5,2.5,0,0,1,5,0Z"/>
                        </g>
                    </svg>
                </div> </> : null
            }
        </div> 
        
    </>
    
}