import React from "react";
import Image from 'next/image';
import Link from 'next/link';


export default function BlogItemLink( {item} ) { 

    
    return <React.Fragment>
        <div className="blog-item w-full py-6 flex flex-row">
            <div className="flex-shrink-0 w-32 ml-32 mt-2">              
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