import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import styles from "./Project.module.css"




export default function Project(props) {

    return  <React.Fragment>

                        <div className="flex flex-column mb-6 mt-8">
                            <div className="blog-items flex flex-row flex-wrap justify-between">
                                {props.source.map((item, index) => <>
                                    
                                    <div className="flex flex-col items-center  w-1/2 px-8 py-4">
                                        <Link href={`/${props.category}/[slug]`} as={`/${props.category}/${item.slug}`} className=" ">
                                            <div className="flex-shrink-0 flex flex-col items-center group relative">
                                                <img className={`${styles.project} project w-100 rounded-xl object-cover`} src={item.files.url} />
                                                <div className="bg-gray-100 w-full h-full absolute group-hover:opacity-90 text-gray-800 cursor-pointer
                                                                    opacity-0 rounded-xl px-8 py-8 flex flex-col justify-between transition-all duration-300 ease-in-out">
                                                    <div><p><i>{item.excerpt.substring(0, 200).concat("...")}</i></p></div>
                                                    <div className="flex flex-wrap py-2">
                                                        {
                                                            item.tags.map( tag => <p className="px-2 text-sm" >{tag}</p>)
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                        <h2 className="mt-2">
                                            <Link href={`/${props.category}/[slug]`} as={`/${props.category}/${item.slug}`} className="cursor-pointer">{item.title}</Link>
                                        </h2>
                                        
                                    </div>
                                    
                                    </>
                                )}
                            </div>
                        </div>

            </React.Fragment>
}


//##########################################################################################
const ProjectItem = (props) => {
    const {title = "", slug = {}, coverImage = {},
            tags = [], date = "", excerpt = ""} = props.source;


    return <React.Fragment>
        <div className="blog-item w-full py-6 px-64 flex flex-row">
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
