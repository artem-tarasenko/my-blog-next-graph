import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown'



export function Snippet( {snippet} ) {
    // var result = md.render(snippet.content);

    // console.log(result)
    console.log("Text", snippet.content)
    console.log("Text type", typeof(snippet.content))

    return <>
        <div className="wrapper flex flex-col justify-items-stretch h-full">
            <div className="img bg-black-800">
                <img className="object-cover w-full h-64" src={snippet?.coverImage?.url}></img>
            </div>
            <section className="blog flex container 2xl mx-auto my-6 flex-grow">
                <div className="post-body container mx-64">
                    <h1>{snippet.title}</h1>
                    {<ReactMarkdown>{snippet.content}</ReactMarkdown>}
                </div>
            </section>
        </div>
    </>
}

export const SnippetsSideMenu = ( {data} ) => {
    console.log("New menu => ", data);

    function shortenString(string, limit){
        return (string.length > limit) ? string.substr(0, limit).concat("...") : string;
      }
    
    return <>
        <div  >
            {
                data.map(item => {
                    return <div className="my-5">
                        <a href={`snippets/${item.slug}`}>{item.title}</a>
                        {
                            item.tags.map( tag => <p>{tag}</p>)
                        }
                        <p>{shortenString(item.excerpt, 100)}</p>
                    </div>
                })
            }
        </div>
    </>
}
