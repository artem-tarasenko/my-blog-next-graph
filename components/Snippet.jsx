import React from "react";
import Image from 'next/image';
import GitHubIcon from '@material-ui/icons/GitHub';
import WebIcon from '@material-ui/icons/Web';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
// import Prism from "prismjs";

import styles from "./Snippet.module.css"


//  #############     //BODY     ###############################################
export function Snippet( {snippet} ) {
    // var result = md.render(snippet.content);
    // console.log(snippet.tags)

    // useEffect(() => {
    //     if (typeof window !== 'undefined') {
    //         Prism.highlightAll();
    //     }
    // }, []);

    return <>
        <div className="wrapper flex flex-col justify-items-stretch h-full my6 py-6">

            <section className="blog flex container 2xl mx-auto mb-6">
                <div className={`${styles.postBody} container ml-16 mr-32 flex-grow flex flex-col`}>
                    <h1>{snippet.title}</h1>
                    <div className="post-links my-4 flex flex-col">
                        <a href={snippet.repo} className="git my-1 text-lg text-gray-400 flex flex-row items-center">
                            <GitHubIcon className="mr-2" fontSize='small' />{snippet.repo}
                        </a>
                        <a href={snippet.example} className="git my-1 text-lg text-gray-400 flex flex-row items-center">
                            <WebIcon className="mr-2" fontSize='small' />{snippet.example}
                        </a>
                    </div>
                    {<ReactMarkdown>{snippet.content}</ReactMarkdown>}
                    <div className="post-tags flex flex-row">
                        {
                            snippet.tags.map(item => <p className={`${styles.snippetTags} mt-8 mx-2 text-lg`}>{item}</p>)
                        }
                    </div>
                </div>
            </section>
        </div>
    </>
}


//  #############     MENU     ###############################################
export const SnippetsSideMenu = ( {data} ) => {

    function shortenString(string, limit){
        return (string.length > limit) ? string.substr(0, limit).concat("...") : string;
      }
    
    return <>
        <h2 className="px-2">More snippets</h2>
        <div className="divide-y-2 divide-darkgrey-700 mt-4" >
            {
                data.map((item, index) => {
                    if(index < 6) {
                    return <>
                        <div className="pt-3 w-72 flex flex-col hover:bg-indigo-50 transition-all ease-in-out duration-300">
                            <a className="px-2 leading-5 text-sm" href={`/snippets/${item.slug}`}>{item.title}</a>
                            <div className="px-2 flex flex-row divide-x-3 divide-darkgrey-900 py-3">
                                {
                                    item.tags.map( tag => <p className="text-xs mr-2">{shortenString(tag, 100)}</p>)
                                }
                            </div>
                            {/* <p className="text-sm">{shortenString(item.excerpt, 100)}</p> */}
                        </div>
                        
                    </>
                    }
                })
            }
        </div>
        {/* <div className="px-2 mt-8 uppercase ">
            
            <Link href="/snippets" className="">Back to list</Link>
        </div> */}
    </>
}
