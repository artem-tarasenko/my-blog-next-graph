import React from "react";
import Image from 'next/image';
import Link from 'next/link';

const Demo = () => { return <React.Fragment>
    <div className="blog-item w-full py-6 flex flex-row">
        <div className="flex-shrink-0 w-32 ml-32 mt-2">
            <p className="category uppercase font-thin text-gray-400">category</p>
            <p className="date font-thin text-gray-400">Fri Mar 05 2021</p>
        </div>
        <div className="item-content px-2">
            <h1 className="h1 h-12">Getting started with Next.JS</h1>
            <div className="logos flex flex-row flex-wrap mb-4">
                    <img className="object-contain h-10 mx-4" src="/react.jpg" alt="react" />
                    <img className="object-contain h-10 mx-4" src="/heroku.jpg" alt="heroku"/>
                    <img className="object-contain h-10 mx-4" src="/next.jpg" alt="next" />
            </div>
            <p>
                Mauris vitae odio nec odio rhoncus semper. Cras sollicitudin molestie magna eget fringilla. 
                Nam id vestibulum sem. Ut ipsum mauris, rhoncus eget bibendum a, gravida sit amet lectus. 
                Quisque malesuada facilisis dolor et imperdiet. Maecenas a auctor turpis, vel accumsan metus. 
                Aliquam sed erat id turpis molestie cursus non sit amet mi. Nullam nunc dolor, venenatis ut 
                facilisis eu, consequat vel ligula. Duis porttitor feugiat lacus, quis finibus purus bibendum 
                vel. Aenean sed ex rhoncus, iaculis nisl a, malesuada arcu. Phasellus eget lacus quis neque 
                consequat tristique.
            </p>
            <div className="blog-post-more flex justify-between mt-4 align-center">
                
                <button className="border-2 border-gray-200 hover:border-gray-600 transition-all duration-200 ease-is rounded-sm px-5 py-1">READ</button>
                
 
            </div>
            
        </div>
    </div>
    </React.Fragment>
}

const BlogItem = (props) => { 
    const {title = "", body = [], slug = {}, url = {}, mainImage = {}, 
            logos = [], categories = [], publishedAt = ""} = props.source;
            
    console.group('Item props');
    console.log("title", title);
    console.log("body", body);
    console.log("slug", slug);
    console.log("url", url);
    console.log("main image", mainImage);
    console.log("logos", logos);
    console.log("categories", categories);
    console.log("FULL: ", props);
    console.groupEnd();

    const date = new Date(publishedAt.split("T")[0]);
    
    return <React.Fragment>
        <div className="blog-item w-full py-6 flex flex-row">
            <div className="flex-shrink-0 w-32 ml-32 mt-2">
                {categories.map(cat => <p className="category uppercase font-thin text-gray-400">React</p>)}
                
                <p className="date font-thin text-gray-400">{date.toDateString()}</p>
            </div>
            <div className="item-content px-2">
                <h1 className="h1 h-12">{title}</h1>
                <p>
                    Mauris vitae odio nec odio rhoncus semper. Cras sollicitudin molestie magna eget fringilla. 
                    Nam id vestibulum sem. Ut ipsum mauris, rhoncus eget bibendum a, gravida sit amet lectus. 
                    Quisque malesuada facilisis dolor et imperdiet. Maecenas a auctor turpis, vel accumsan metus. 
                    Aliquam sed erat id turpis molestie cursus non sit amet mi. Nullam nunc dolor, venenatis ut 
                    facilisis eu, consequat vel ligula. Duis porttitor feugiat lacus, quis finibus purus bibendum 
                    vel. Aenean sed ex rhoncus, iaculis nisl a, malesuada arcu. Phasellus eget lacus quis neque 
                    consequat tristique.
                </p>
                <div className="blog-post-more flex justify-between mt-4 align-center">
                    
                    <Link href="/posts/[slug]" as={`/posts/${slug.current}`}>
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
    //const { posts = [] } = props;

    console.log("Blog", props.source);
    console.log("item: ", props.source[1]);
        // {posts.map(
        //   ({ _id, title = '', slug = '', _updatedAt = '' }) =>
        //     slug && (
        //       <li key={_id}>
        //         <Link href="/posts/[slug]" as={`/posts/${slug.current}`}>
        //           <a>{title}</a>
        //         </Link>{' '}
        //         ({new Date(_updatedAt).toDateString()})
        //       </li>
        //     )
        // )}

    return  <React.Fragment>
                <section className="blog flex flex-column container 2xl mx-auto my-6 flex-grow">
                        <div className="flex flex-column mb-6">
                            <div className="blog-items">
                                <BlogItem source={props.source[1]} />
                                <Demo />
                                <Demo />
                                <Demo />
                                <Demo />
                                <Demo />
                            </div>
                            <div className="sidebar flex-shrink-0 mt-6 text-right">
                                <p className="category uppercase font-thin text-gray-400 text-lg">Categories</p>
                                <ul className="submenu pt-4 text-lg text-gray-600">
                                    <li>React</li>
                                </ul>
                            </div>
                        </div>
                </section>   
            </React.Fragment>
}

export default Blog;