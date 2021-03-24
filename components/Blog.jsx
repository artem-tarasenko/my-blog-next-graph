import React from "react";
import Image from 'next/image';
import Link from 'next/link';


const BlogItem = (props) => { 
    const {title = "", slug = {}, coverImage = {}, 
            tags = [], date = "", excerpt = ""} = props.source;

    
    return <React.Fragment>
        <div className="blog-item w-full py-6 flex flex-row">
            <div className="flex-shrink-0 w-32 ml-32 mt-2">
                {tags.map((item, index) => <p key={index} className="category uppercase font-thin text-gray-400">item</p>)}
                
                <p className="date font-thin text-gray-400">{date}</p>
            </div>
            <div className="item-content px-2">
                <h1 className="h1 h-12">{title}</h1>
                <p>{excerpt}
                </p>
                <div className="blog-post-more flex justify-between mt-4 align-center">
                    
                    <Link href={`/${props.category}/[slug]`} as={`/${props.category}/${slug}`}>
                        <a className="border-2 border-gray-200 hover:border-gray-600 transition-all duration-200 ease-is rounded-sm px-5 py-1">READ</a>
                    </Link>{' '}
                    
                    <div className="logos flex flex-row flex-wrap">
                        <img className="object-contain h-10 mx-4" src="/react.jpg" alt="react" />
                        <img className="object-contain h-10 mx-4" src="/heroku.jpg" alt="heroku"/>
                        <img className="object-contain h-10 mx-4" src="/next.jpg" alt="next" />
                    </div>
                </div>
                
            </div>
        </div>
    </React.Fragment>
}

function Blog(props) {
      
    return  <React.Fragment>
                
                        <div className="flex flex-column mb-6">
                            <div className="blog-items">
                                {props.source.map((item, index) => <BlogItem key={index} source={item} category={props.category} />)}
                            </div>
                            <div className="sidebar flex-shrink-0 mt-6 text-right">
                                <p className="category uppercase font-thin text-gray-400 text-lg">Categories</p>
                                <ul className="submenu pt-4 text-lg text-gray-600">
                                    <li>React</li>
                                </ul>
                            </div>
                        </div>
                
            </React.Fragment>
}

export default Blog;