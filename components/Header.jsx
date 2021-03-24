import React from "react";
import Link from 'next/link';

function Header(props) {


    return  <React.Fragment>
                <header className="flex-shrink-0 flex-grow-0">
                <div className="main-menu">
                    <div className="container 2xl mx-auto flex justify-center h-14 items-center">
                        <Link href="/"><p className="px-4">HOME</p></Link>
                        <Link href="/posts"><p className="px-4">BLOG</p></Link>
                        <Link href="/snippets/"><p className="px-4">SNIPPETS</p></Link>
                        <Link href="/portfolio"><p className="px-4">PORTFOLIO</p></Link>
                        <Link href="/resume"><p className="px-4">RESUME</p></Link>
                    </div>
                </div>
                </header>
            </React.Fragment>
}

export default Header;