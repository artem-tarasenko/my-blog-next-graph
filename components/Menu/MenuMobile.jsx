import React from "react";

export default function MenuMobile() {

    console.log("Loading mobile menu")

    return <>
        <aside className="z-50 w-screen h-screen fixed bg-gray-600 bg-opacity-90 flex flex-col justify-evenly">
            <h2 className="text-center text-gray-100 text-3xl">MENU</h2>
            <div className="wrapper mx-4 my-6 flex flex-col items-center justify-start text-gray-100">
                <Link href="/"><p className="text-gray-100 text-xl py-4 border-b-2 border-gray-300 border-opacity-40 w-1/2 text-center text-light">HOME</p></Link>
                <Link href="/posts"><p className="text-gray-100 text-xl py-4 border-b-2 border-gray-300 border-opacity-40 w-1/2 text-center text-light">BLOG</p></Link>
                <Link href="/snippets"><p className="text-gray-100 text-xl py-4 border-b-2 border-gray-300 border-opacity-40 w-1/2 text-center text-light">SNIPPETS</p></Link>
                <Link href="/portfolio"><p className="text-gray-100 text-xl py-4 border-b-2 border-gray-300 border-opacity-40 w-1/2 text-center text-light">PORTFOLIO</p></Link>
                <Link href="/resume"><p className="text-gray-100 text-xl py-4 w-1/2 text-center">                                RESUME</p></Link>
            </div>
            
        </aside>
    </>
}