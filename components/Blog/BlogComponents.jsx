import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import styles from "./BlogComponents.module.css"



function BlogItemLeading( props ) { 
    const item = props.item;

    return <React.Fragment>
        <div className={`${styles.blogLead} w-full py-6 flex flex-row mt-8`}>
            <div className="flex flex-col justify-start w-1/2 place-content-start">
                <p className="date font-thin text-gray-400 block">{item.date}</p>
                <Link href={`/${props.category}/[slug]`} as={`/${props.category}/${item.slug}`}>
                    <h1 className={`${styles.titleWide} h1 z-50 mb-4 text-3xl font-serif font-light transform transition-all duration-300 ease-in-out hover:-translate-x-1 cursor-pointer hover:text-gray-700`}>{item.title}</h1>
                </Link>
                <p className="mt-4 block">{item.excerpt}</p>
                <Link href={`/${props.category}/[slug]`} as={`/${props.category}/${item.slug}`}>
                    <a className={`${styles.blogLeadButton} mt-4 text-gray-400 hover:text-gray-700 transition-all duration-200 ease-is rounded-sm py-2 flex`}>
                        <MenuBookIcon className={`${styles.blogLeadButtonIcon} self-center mr-2`} /><p>READ</p></a>
                </Link>{' '}
            </div>

            <div className="cover w-1/2">
                <img className={`${styles.imgClipped} z-10`} src={item.coverImage.url} />
            </div>
        </div>
    </React.Fragment>
}

function BlogItemShort( props ) { 
    const item = props.source;
    
    return <React.Fragment>

        <div className="blog-item w-full flex flex-row">
            <div className="flex-shrink-0 w-24 pb-6 mr-4 pr-4 text-right border-r-2 border-gray-300 relative">   
                <p className="date font-thin text-gray-400">{item.date}</p>
                <div className="rounded-full absolute -right-2 top-0 h-4 w-4 mt-1 bg-gray-50 border-2 border-gray-300"></div>
            </div>
            <div className="item-content px-2 pb-10 pt-3">
                <div className="flex group">
                    <div className="flex flex-col flex-shrink-0">
                        <img className={`${styles.imgClipped} z-10 h-48 w-auto transform`} src={item.coverImage.url} />
                        <div className="logos flex flex-row flex-nowrap pl-8 justify-center divide-x-8 divide-transparent ">
                            <p className="text-gray-500">React</p><p className="text-gray-500">Heroku</p><p className="text-gray-500">Vercel</p>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <Link href={`/${props.category}/[slug]`} as={`/${props.category}/${item.slug}`}>
                            <a className="h1 -ml-12 pl-14 py-6 pr-12 bg-gray-100 text-gray-500 text-2xl 
                                            hover:shadow-lg hover:scale-105 hover:bg-gray-200 origin-top-left transform font-serif transition-all ease-in-out duration-300">
                                {item.title}</a>
                        </Link>
                        <p className="mt-2 ml-4 text-right text-gray-500 text-lg">{item.excerpt}</p>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
}

function BlogItemLink( props ) { 
    const item = props.item;
    
    return <React.Fragment>
        <div className="blog-item w-full flex flex-row">
            <div className="flex-shrink-0 w-24 pb-6 mr-4 pr-4 text-right border-r-2 border-gray-300 relative">   
                <p className="date font-thin text-gray-400">{item.date}</p>
                <div className="rounded-full absolute -right-2 top-0 h-4 w-4 mt-1 bg-gray-50 border-2 border-gray-300"></div>
            </div>
            <div className="item-content px-2 pb-10 pt-3 w-full">
                <Link href={`/${props.category}/[slug]`} as={`/${props.category}/${item.slug}`}>
                    <div className="flex cursor-pointer">
                        <img className={`${styles.imgClipped} z-10 h-24 cursor-pointer filter drop-shadow-lg`} src={item.coverImage?.url ?? "#"} />
                        <div className={`${styles.blogLink} flex flex-col bg-gray-100 -ml-12 pl-20 py-2 pr-4 shadow-lg justify-center w-full relative`}>
                            <div className={`${styles.blogLinkTitle} h-full flex flex-col justify-center`}>
                                <a className="h1 text-gray-500 text-xl leading-5 font-serif">{item.title}</a>
                            </div>
                            <div className={`${styles.blogLinkMore} flex h-full absolute top-0`}>
                                <p className="my-2 mr-4 text-right text-gray-500 text-base self-center">
                                    {item.excerpt.slice(0, 130).concat("...")}
                                </p>
                                <MenuBookIcon className={`${styles.blogLinkIcon} self-center mr-4`} />
                            </div>

                        </div>
                    </div>
                </Link>
            </div>
        </div>
    </React.Fragment>
}



export default BlogItemShort;
export {BlogItemLeading, BlogItemLink}