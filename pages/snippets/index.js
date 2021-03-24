import React, { useEffect, useState } from "react";
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

import Layout from '../../components/Layout.jsx';
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'


// ###############################################################
// ###############################################################
const client = new ApolloClient({
    uri: process.env.REACT_APP_GRAPH_API,
    cache: new InMemoryCache()
});

// ###############################################################
// ###############################################################
// This function gets called at build time
export async function getStaticProps() {
    //destructure response to data obj
    const { data: {snippets} } = await client.query({
        query: gql`{ 
            snippets {
                title
                slug
                tags
                excerpt
                createdAt
              } 
        }`
    });

    //collecting all possible tags for snippets to pass them as default value
    let tagsArray = []
    snippets.forEach(snippet => snippet.tags.forEach(tag => !tagsArray.includes(tag) && tagsArray.push(tag)));

    let newArr = [];
    tagsArray.forEach(item => newArr.push({tag: item, state: true}));

    return { props: {snippets: snippets, allTags: newArr}};
  }




// ###############################################################
// ###############################################################
function Index( {snippets, allTags} ) {
    const [snippetsArray, setSnippetsArray] = useState(snippets);
    const [filter, setFilter] = useState(allTags)
    console.log("SNIPPETS PROPS DATA > ", snippets);
    console.log("TAGS PROPS DATA > ", filter);

    function sortByTag(e) {
        console.log("###########################################################################");
        console.log("###########################################################################");
        console.group('Init sorting');
            console.log("On Click # Snippets pressed", e.target.value);
            console.log("On Click # Snippets arr", e.target.classList);
            console.log("On click # event", e.target);
        console.groupEnd();

        let filterValue = [];



        if(e.target.classList.contains("selected")) {
            //DEACTIVATING FILTER
            console.group('Deactivating...');
            e.target.classList.remove("selected");
            //test whether filter had 1 tag or more
            if(filter.length = 1) {
                //resetting filter to default
                console.group('Deselecting tag');
                console.log("Removing last filter (filter length):", filter.length);
                setFilter(tags);
                console.log("Resetting default filter (length):", filter.length);
                console.groupEnd();
            } else {
                //remove tag from filter
                console.log("At least 2 filters, removing selected (init filterss, remove tag):", filter, e.target.value);
                
                setFilter(prevValue => prevValue.filter( tag != e.target.value))
                console.log("New filter value:", filter);
                console.groupEnd();
            }

        } else if(!e.target.classList.contains("selected")) {
            //ACTIVATING FILTER
            console.group('Activating...');
            e.target.classList.add("selected");

            //test whether filter was default or not
            if(filter === tags) {
                console.log("Filters are equal (tags, filter):", tags.length, filter.length);
                //remove all filter data if filter=tags, add 1 selected
                //rerender snippets
                console.log("Updating filter, should be 1 item only");
                setFilter([e.target.value]);
                console.log("New filter value:", filter);
                console.groupEnd();

            } else {
                console.log("Filters are NOT equal (tags, filter):", tags.length, filter.length);
                
                setFilter(prevValue => [...prevValue, e.target.value])
                console.log("New filter value:", filter);
                console.groupEnd();
            }
            //reset filter if 1 only was selected
            //remove selected if 2+ were selected
            //rerender snippets
        }
        

        

        // const filteredArray = snippetsArray.filter(item => item.tags.includes(e.target.value));
        // console.log("On click # filtered array of snippets: ", filteredArray);
        // setSnippetsArray(filteredArray);
    }

    function initTags() {
        //collecting all possible tags for CURRENT snippets to pass them as default value
        //allTags - all possible from SSR stage
        let sortedTags = []
        snippetsArray.forEach(snippet => snippet.tags.forEach(tag => !sortedTags.includes(tag) && sortedTags.push(tag)));
        // console.log("ARR", tagsArray.map(tag => { return {tag: tag, isActive: true}}))

        let newSortedArr = [];
        sortedTags.forEach( item => newSortedArr.push({tag: item, state: true}))
        setFilter(newSortedArr)
    }

    function sortSnippets(e) {


        console.log("click", e.target);
        //const targetTagStatus = ((filter.find(item => item.tag === e.target.value).state));

        const updatedFilter = filter.map( obj => obj.tag === e.target.value ? ({...obj, state: !obj.state}) : obj);
        console.log(updatedFilter);
        initTags();
        setFilter(updatedFilter);
        
    }
    
    return  <React.Fragment>
                <Layout >
                    <React.Fragment>
                        <div className="flex flex-column mb-6 flex flex-col">
                            <div className="px-64">
                                <p>Nay whatever way delicate passed of avoid might sing whatever all window concealed. Dissuade whole many age mistress late sentiments held doubt scarcely against invitation answer enable. Visited engage steepest shall beyond subject civilly performed concluded offence farther.</p>
                                <div className="tags-filter flex flex-row mt-6">
                                    <button className="tag px-2 py-1 border mr-2" >TEST</button>
                                    {/* <button className="tag px-2 py-1 border mr-2" onClick={sortSnippets} value={filter[prop]}> */}
                                    {
                                        filter.map( (obj, index) => {
                                            if(obj.state) {
                                                return <button key={index} className="tag px-2 py-1 border mr-2" 
                                                                onClick={sortSnippets} 
                                                                value={obj.tag}>
                                                            {obj.tag}
                                                        </button>
                                            } else {
                                                return <button key={index}  className="tag px-2 py-1 border mr-2 selected" 
                                                                onClick={sortSnippets} 
                                                                value={obj.tag}
                                                                >
                                                            {obj.tag}
                                                        </button>
                                            }
                                        })
                                    }
                                </div>
                            </div>
                            <div className="pt-8 flex flex-row flex-wrap items-stretch">
                                {/* {snippetsArray.map(snippet => {
                                    let isActive = false;
                                    //console.log("Snippet in MAP", snippet.title);
                                    for(let tag of snippet.tags) {
                                        
                                        //console.log("FOR LOOP: (snippet, tag)", snippet.title, tag);
                                        if(filter.includes(tag)) {
                                            isActive= true;
                                            console.groupCollapsed('ACTIVATING SNIPPET');
                                            console.log("title", snippet.title);
                                            console.log("tag", tag);
                                            console.log("Filter on the moment", filter);
                                            console.log("TAGS DEF", tags);
                                            console.log("isActive?", isActive);
                                            console.groupEnd();
                                            
                                            break;
                                        }
                                    }
                                    
                                    // isActive 
                                    //     ? ( <>
                                    //         <div className="p-2 flex-shring-0 w-1/4 flex">
                                    //             <div className="bg-gray-200 p-3">
                                    //                 <h2 className="pb-2 text-lg leading-5"><a href={`snippets/${snippet.slug}`}>{snippet.title}</a></h2>
                                    //                 <p className="text-sm leading-4">{snippet.excerpt}</p>
                                    //                 <span className="snippet-tags flex flex-row pt-2 flex-wrap">
                                    //                     {snippet.tags.map(tag => <p className="snippet-tag text-sm flex-shrink-0">{tag}</p>)}
                                    //                 </span>
                                    //             </div>
                                    //         </div>
                                    //     </>)
                                    //     : null

                                    if(isActive) {
                                        
                                        return <>
                                             <div className="p-2 flex-shring-0 w-1/4 flex">
                                                 <div className="bg-gray-200 p-3">
                                                     <h2 className="pb-2 text-lg leading-5"><a href={`snippets/${snippet.slug}`}>{snippet.title}</a></h2>
                                                     <p className="text-sm leading-4">{snippet.excerpt}</p>
                                                     <span className="snippet-tags flex flex-row pt-2 flex-wrap">
                                                         {snippet.tags.map(tag => <p className="snippet-tag text-sm flex-shrink-0">{tag}</p>)}
                                                     </span>
                                                 </div>
                                             </div>
                                         </>
                                    } else {
                                        return null
                                    }


                                })} */}



                                {


                                    // <>
                                    // <div className="p-2 flex-shring-0 w-1/4 flex">
                                    //     <div className="bg-gray-200 p-3">
                                    //         <h2 className="pb-2 text-lg leading-5"><a href={`snippets/${snippet.slug}`}>{snippet.title}</a></h2>
                                    //         <p className="text-sm leading-4">{snippet.excerpt}</p>
                                    //         <span className="snippet-tags flex flex-row pt-2 flex-wrap">
                                    //             {snippet.tags.map(tag => <p className="snippet-tag text-sm flex-shrink-0">{tag}</p>)}
                                    //         </span>
                                    //     </div>
                                    // </div>
                                    // </>
                                    <p>Temp text</p>
                                }

                            </div>
                        </div>
                    </React.Fragment>
                </Layout>
            </React.Fragment>
}

export default Index;