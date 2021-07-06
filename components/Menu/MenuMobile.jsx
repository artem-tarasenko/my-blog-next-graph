import React from "react";
import Link from "next/link";
import CloseIcon from '@material-ui/icons/Close';

export default function MenuMobile(props) {
    console.log("Loading mobile menu")

    const styleMenuLink = "text-gray-100 text-xl py-4 border-b-2 border-gray-300 border-opacity-40 w-1/2 text-center text-light";

    function hideMenu() {
        props.handleHiding()
    }

    return <>
        { props.isActive ? <>  
            <aside className="z-20 w-full h-full fixed top-0 left-0 right-0 bottom-0  bg-gray-600 flex flex-col justify-evenly">
            <button onClick={hideMenu} className="text-gray-100 z-30 right-0 self-end my-2 p-2 mr-4 top-0 fixed"><CloseIcon fontSize="large" /></button>
                <h2 className="text-center text-gray-100 text-3xl">MENU</h2>
                <div className="wrapper mx-4 my-6 flex flex-col items-center justify-start text-gray-100">
                    <Link href="/"><p className={styleMenuLink} onClick={hideMenu}>HOME</p></Link>
                    <Link href="/posts"><p className={styleMenuLink}>BLOG</p></Link>
                    <Link href="/snippets"><p className={styleMenuLink}>SNIPPETS</p></Link>
                    <Link href="/portfolio"><p className={styleMenuLink}>PORTFOLIO</p></Link>
                    <Link href="/resume"><p className="text-gray-100 text-xl py-4 w-1/2 text-center">RESUME</p></Link>
                </div>
            </aside>
            </> : null
        }
    </>
}