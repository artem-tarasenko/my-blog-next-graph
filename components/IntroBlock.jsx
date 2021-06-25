import React from "react";
import {TemplateWrapper} from './Layout.jsx';
import styles from "./IntroBlock.module.css";

export default function IntroBlock( props ) {

    return <>
        <div className="intro z-10 h-48 w-full flex flex-shrink-0">
            { props.intro ? <>
                <div className="px-48 py-8 text-center self-center container mx-auto">
                    <p className="text-xl font-light">{props.intro.content}</p>
                </div>
                </> : null
            }
            {
                props.image ? <>
                        <div className="img bg-black-800 w-full">
                            <img className="object-cover w-full h-48" src={props.image}></img>
                        </div>
                </> : null
            }
        </div>
    </>
}