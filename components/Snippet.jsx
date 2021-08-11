import React, {useEffect} from "react";
import Prism from "prismjs";
import parse from 'html-react-parser';

import styles from "./Snippet.module.css"


//  #############     //BODY     ###############################################
export function Snippet( {snippet, isMobile} ) {
    
    useEffect( () => {
        const items = document.querySelectorAll("pre");
        items.forEach( item => {
            const parentClass = item.parentElement.classList[0];
            item.classList.add(`language-${parentClass}`)
        });
    
        if (typeof window !== 'undefined') {
            Prism.highlightAll();
        }
    }, [])

    console.log("SNIP", snippet)

    return <>
        <div className="wrapper flex flex-col flex-grow-0 justify-items-stretch h-full my6 py-6">

            <section className="blog flex container 2xl max-w-6xl mx-auto mb-6">
                <div className={`${styles.postBody} ${isMobile ? styles.postBodyMobile : ''} container pl-4 lg:ml-16 flex flex-col w-full`}>
                    <h1>{snippet.title}</h1>
                    <div className="post-links my-4 flex flex-col">
                        { snippet.repo.length > 0 ?
                            <a href={snippet.repo} className="git my-1 text-sm lg:text-lg text-gray-400 flex items-center">
                                
                                <img className="snippet-icon p-0 pr-2" src="/icons/github.png" alt="" />{snippet.repo}
                            </a>
                            : null
                        }
                        { snippet.example.length > 0 &&
                            <a href={snippet.example} className="git my-1 text-sm lg:text-lg text-gray-400 flex items-center">
                                <img className="snippet-icon p-0 pr-2" src="/icons/codesandbox.png" alt="" />{snippet.example}
                            </a>
                        } 
                    </div>
                    {parse(snippet.content.html)}
                    <div className="post-tags flex flex-row">
                        {
                            snippet.tags.map( (item, index) => <p key={index} className={`${styles.snippetTags} mt-8 mx-2 text-sm lg:text-lg`}>{item}</p> )
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
        <h2 className="px-2 mx-4 lg:mx-0">More snippets</h2>
        <div className="divide-y-2 divide-darkgrey-700 mx-4 lg:mx-0 lg:mt-4 mb-8 lg:mb-0" >
            {
                data.map((item, index) => {
                    if(index < 6) {
                    return <>
                        <div className="pt-3 w-full lg:w-72 flex flex-col lg:hover:bg-indigo-50 transition-all ease-in-out duration-300">
                            <a className="px-2 leading-5 text-sm" href={`/snippets/${item.slug}`}>{item.title}</a>
                            <div className="px-2 flex flex-row divide-x-3 divide-darkgrey-900 py-3">
                                {
                                    item.tags.map( tag => <p className="text-xs mr-2">{shortenString(tag, 100)}</p>)
                                }
                            </div>
                        </div>
                    </>
                    }
                })
            }
        </div>
    </>
}
