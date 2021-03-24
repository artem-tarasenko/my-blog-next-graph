import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import parse from 'html-react-parser';


function BlogPost( {post} ) {
    const {title = "", date = "", content = {}, coverImage = {}} = post;

    return (
        
            <React.Fragment>
                <div className="wrapper flex flex-col justify-items-stretch h-full">
                    <Header />
                    <div className="img bg-black-800">
                        <img className="object-cover w-full h-64" src={coverImage.url}></img>
                    </div>
                    <section className="blog flex container 2xl mx-auto my-6 flex-grow">
                        <div className="post-body container mx-64">
                            <h1>{post.title}</h1>
                            {parse(content.html)}
                        </div>
                    </section>
                </div>
            </React.Fragment>

    )
}

export default BlogPost;