import React from "react";
import parse from 'html-react-parser';

function BlogPost( {post} ) {
    const {title = "", date = "", content = {}, coverImage = {}} = post;

    return (
        
            <React.Fragment>
                <div className="wrapper flex flex-col justify-items-stretch h-full">

                    <section className="blog flex container 2xl mx-auto my-6 flex-grow">
                        <div className="post-body container mx-4 lg:mx-64">
                            <h1>{post.title}</h1>
                            {parse(content.html)}
                        </div>
                    </section>
     
                </div>
            </React.Fragment>

    )
}

export default BlogPost;