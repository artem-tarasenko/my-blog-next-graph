import React from "react";
import Link from 'next/link';
import styles from './Header.module.css';
import { useEffect } from "react";

function Header(props) {

    let location = '';

    useEffect( () => {
        location = window.location.href.split('/');
        const button = document.querySelector(`.${location[3] ? location[3] : 'home'}-button`);
        button.classList.add(`${styles.active}`);
    },[])
    


    return  <React.Fragment>
                <header className="flex-shrink-0 flex-grow-0 z-50">
                    <div className="main-menu">
                        <div className="container 2xl mx-auto flex justify-center h-14 items-center">
                            <Link href="/">
                                <a className={`${styles.button} home-button`}>
                                    <img src="/icons/home.png" />
                                    <p>HOME</p>
                                </a>
                            </Link>
                            <Link href="/posts">
                            <a className={`${styles.button} posts-button`}>
                                    <img src="/icons/blog.png" />
                                    <p>BLOG</p>
                                </a>
                            </Link>
                            <Link href="/snippets/">
                            <a className={`${styles.button} snippets-button`}>
                                    <img src="/icons/snippets.png" />
                                    <p>SNIPPETS</p>
                                </a>
                            </Link>
                            <Link href="/portfolio">
                            <a className={`${styles.button} portfolio-button`}>
                                    <img src="/icons/portfolio.png" />
                                    <p>PORTFOLIO</p>
                                </a>
                            </Link>
                            <Link href="/resume">
                            <a className={`${styles.button} resume-button`}>
                                    <img src="/icons/resume.png" />
                                    <p>RESUME</p>
                                </a>
                            </Link>
                        </div>
                    </div>
                </header>
            </React.Fragment>
}

export default Header;