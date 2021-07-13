import React, { useEffect } from "react";
import parse from 'html-react-parser';
import styles from "./BlogPost.module.css";
import Prism from "prismjs";


function BlogPost( {post, isMobile} ) {
    const {title = "", date = "", content = {}, coverImage = {}} = post;

    useEffect( () => {
        const items = document.querySelectorAll("pre");
        items.forEach( item => {
            const parentClass = item.parentElement.classList[0];
            item.classList.add(`language-${parentClass}`)
        });
    
        if (typeof window !== 'undefined') {
            Prism.highlightAll();
        }
    }, [])


    return (
        
            <React.Fragment>
                
                <div className="wrapper flex flex-col justify-items-stretch h-full">

                    <section className="blog flex container 2xl mx-auto my-6 flex-grow">
                        <div className={`container mx-4 lg:mx-0 lg:px-64 ${styles.post} ${isMobile ? styles.postMobile : ''}`}>
                            <h1>{post.title}</h1>
                            {parse(content.html)}
                        </div>
                    </section>
     
                </div>
            </React.Fragment>

    )
}

export default BlogPost;