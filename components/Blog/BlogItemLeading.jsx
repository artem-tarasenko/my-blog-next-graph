import React from "react";
import Image from 'next/image';
import Link from 'next/link';


export default function BlogItemLeading( {item} ) { 

    return <React.Fragment>
        <div className="blog-item w-full py-6 flex flex-row">
            <div className="flex flex-col justify-start w-1/2">
                <div className="">   
                    <p className="date font-thin text-gray-400">{item.date}</p>
                </div>
                <div className="item-content">
                    <h1 className="h1 h-12">{item.title}</h1>
                    

                    
                </div>
                <div>
                    <p>{item.excerpt}</p>
                </div>
            </div>
            <div className="cover w-1/2">
                <img src={item.coverImage.url} />
            </div>



            {/* Link */}
            <div className="blog-post-more flex justify-between mt-4 align-center">
                {/* <Link href={`/${item.category}/[slug]`} as={`/${item.category}/${item.slug}`}>
                    <a className="border-2 border-gray-200 hover:border-gray-600 transition-all duration-200 ease-is rounded-sm px-5 py-1">READ</a>
                </Link>{' '} */}
            </div>
        </div>
    </React.Fragment>
}