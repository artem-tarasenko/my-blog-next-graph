import React from "react";
import {TemplateWrapper} from './Layout.jsx';
import styles from "./IntroBlock.module.css";

export default function IntroBlock( props ) {

    return <>
        
            { props.intro ? <div className="my-6 lg:my-0 intro z-10 h-48 w-full flex flex-shrink-0"> 
                <div className="px-6 lg:px-48 py-8 text-center self-center container mx-auto">
                    <p className="text-xl font-light">{props.intro.content}</p>
                </div>
                </div> : null
            }
            {
                props.image ? <div className="lg:my-0 intro z-10 h-48 w-full flex flex-shrink-0">
                        <div className="img bg-black-800 w-full">
                            <img className={`${styles.img} object-cover w-full h-48 shadow-md border-t-2 border-opacity-20`} src={props.image}></img>
                        </div>
                </div> : null
            }
        
    </>
}