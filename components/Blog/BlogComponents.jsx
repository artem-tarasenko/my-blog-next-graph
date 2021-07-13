import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import styles from "./BlogComponents.module.css"



function BlogItemLeading( props ) { 
    const item = props.item;

    return <React.Fragment>
        <div className={`${styles.blogLead} w-full py-6 flex flex-col lg:flex-row mt-8`}>
            <div className="flex flex-col justify-start w-full lg:w-1/2 place-content-start">
                <p className="date font-thin text-gray-400 block text-right lg:text-left">Latest post: {item.date}</p>
                <Link href={`/${props.category}/[slug]`} as={`/${props.category}/${item.slug}`}>
                    <h1 className={`${ !props.isMobile ? styles.titleWide : '' } h1 z-50 mb-4 text-2xl lg:text-3xl font-serif font-light transform transition-all duration-300 ease-in-out lg:hover:-translate-x-1 cursor-pointer lg:hover:text-gray-700`}>{item.title}</h1>
                </Link>
                <p className="mt-4 block">{item.excerpt}</p>
                { !props.isMobile ? <Link href={`/${props.category}/[slug]`} as={`/${props.category}/${item.slug}`}>
                    <a className={`${styles.blogLeadButton} mt-4 text-gray-400 lg:hover:text-gray-700 transition-all duration-200 ease-is rounded-sm py-2 flex`}>
                        <MenuBookIcon className={`${styles.blogLeadButtonIcon} self-center mr-2`} /><p>READ</p></a>
                </Link> : null}
            </div>

            <div className="lg:cover w-full lg:w-3/5 self-center order-first lg:order-last">
                <img className={`${styles.imgClipped} z-10`} src={item.coverImage.url} />
            </div>
        </div>
    </React.Fragment>
}

function BlogItemShort( props ) { 
    const item = props.source;
    
    return <React.Fragment>

        <div className="blog-item w-full flex flex-row">
            <div className="flex-shrink-0 w-24 pb-6 mr-4 pr-4 text-right border-r-2 border-gray-300 relative hidden lg:inline-flex">   
                <p className="date font-thin text-gray-400">{item.date}</p>
                <div className="rounded-full absolute -right-2 top-0 h-4 w-4 mt-1 bg-gray-50 border-2 border-gray-300"></div>
            </div>
            <div className="item-content px-2 pb-10 pt-3">
                <div className="flex flex-col lg:flex-row group">
                    <div className="flex flex-col flex-shrink-0">
                        <img className={`${ !props.isMobile ? styles.imgClipped : ''} z-10 h-20 lg:h-48 lg:w-80 object-cover lg:transform rounded-t-md lg:rounded-none`} src={item.coverImage.url} />
                        <div className="logos flex flex-row flex-nowrap lg:pl-8 justify-center divide-x-8 divide-transparent hidden lg:inline-flex">
                            
                            {item.tags 
                                ? item.tags.map( item => <p className="text-gray-500">{item}</p>)
                                : null
                            }
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <Link href={`/${props.category}/[slug]`} as={`/${props.category}/${item.slug}`}>
                            <a className="h1 px-6 py-2 text-xl lg:-ml-12 lg:pl-14 lg:py-6 lg:pr-12 bg-gray-200 text-gray-500 lg:text-2xl rounded-b-md 
                                            lg:hover:shadow-lg lg:hover:scale-105 lg:hover:bg-gray-200 origin-top-left transform font-serif transition-all ease-in-out duration-300">
                                {item.title}</a>
                        </Link>
                        <p className="m-0 -mt-2 p-4 lg:p-0 lg:mt-2 lg:ml-4 text-right text-gray-500 text-md lg:text-lg border-2 lg:border-0 rounded-b-md">{item.excerpt}</p>
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
            <div className="flex-shrink-0 w-24 pb-6 mr-4 pr-4 text-right border-r-2 border-gray-300 relative hidden lg:inline-flex">   
                <p className="date font-thin text-gray-400">{item.date}</p>
                <div className="rounded-full absolute -right-2 top-0 h-4 w-4 mt-1 bg-gray-50 border-2 border-gray-300"></div>
            </div>
            <div className="item-content px-2 py-4 lg:pb-10 lg:pt-3 w-full">
                <Link href={`/${props.category}/[slug]`} as={`/${props.category}/${item.slug}`}>
                    <div className="flex cursor-pointer">
                        <img className={`${styles.imgClipped} z-10 h-24 lg:w-48 lg:object-cover cursor-pointer filter drop-shadow-lg hidden lg:inline-flex`} src={item.coverImage?.url ?? "#"} />
                        <div className={`${styles.blogLink} flex flex-col bg-gray-100 -ml-8 pl-6 pr-2 lg:-ml-12 lg:pl-20 py-4 lg:pr-4 shadow-lg justify-center w-full relative`}>
                            <div className={`${styles.blogLinkTitle} h-full flex flex-col justify-center`}>
                                <a className="h1 text-gray-500 text-xl leading-5 font-serif">{item.title}</a>
                            </div>
                            <div className={`${styles.blogLinkMore} flex h-full absolute top-0`}>
                                <p className="my-2 mr-4 text-right text-gray-500 text-base self-center">
                                    {item.excerpt.slice(0, 130).concat("...")}
                                </p>
                                { !props.isMobile ? <MenuBookIcon className={`${styles.blogLinkIcon} self-center mr-4`} /> : null }
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