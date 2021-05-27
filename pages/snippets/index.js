import React, { useEffect, useReducer, useState } from "react";
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import Layout from '../../components/Layout.jsx';


//! REMOVE THIS LINE LATER
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

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
    tagsArray.forEach(item => newArr.push({tag: item, isActive: true, isSelected: false}));
    const initialContent = { snippets: snippets, filter: newArr, allTags: tagsArray, defaultFilter: newArr }

    return { props: initialContent};
  }


const ACTIONS = {
    ADD_FILTER: 'add',
    REMOVE_FILTER: 'remove',
    TEST: 'test',
    RESET: 'reset'
  }

function reducer(content, action) {
    const initState = content.allSnippets; //all 8 items
    console.log("-- Reducer, CONTENT CURRENT --", content.snippets)
    
    switch(action.type) {
        case ACTIONS.ADD_FILTER: {
            console.log("-- Reducer, ADD --")
            const updatedFilter = content.filter.map( item => item.tag === action.payload.tag ? {...item, isSelected: true} : {...item});
            const updatedSnippets = filterSnippets(updatedFilter);
            console.log("Adding to current state: ", updatedSnippets.length)

            return {...content, filter: updatedFilter, snippets: updatedSnippets}
        }

        case ACTIONS.REMOVE_FILTER: {
            console.log("-- Reducer, REMOVE --")
            const updatedFilter = content.filter.map( item => item.tag === action.payload.tag ? {...item, isSelected: false} : {...item});
            const activeTags = updatedFilter.reduce( (arr, item) => item.isSelected ? [...arr, item.tag] : arr, [])
            if(activeTags.length > 0) {
                // -1 filter
                const updatedSnippets = filterSnippets(updatedFilter);

                return {...content, filter: updatedFilter, snippets: updatedSnippets}
            } else {
                //set defauld
                console.log("Resetting filter to default values")
                return {...content, snippets: initState, filter: content.defaultFilter}
            }
        }

        case ACTIONS.TEST: {
            const temp = filterSnippets();
            return {...content, snippets: temp}
        }

        case ACTIONS.RESET: {
            return {...content, snippets: initState, filter: content.defaultFilter}
        }
    }

    function filterSnippets(filters) {
        const activeTags = filters.reduce( (arr, item) => item.isSelected ? [...arr, item.tag] : arr, [])
        console.log("filterSnippets -> tags", activeTags)


        const newSnippets = initState.reduce( (arr, snippet) => { 
            activeTags.forEach( tag => {
                if(snippet.tags.includes(tag) && (!arr.some(item => item.slug === snippet.slug))) {
                    arr.push(snippet)
                }
            })
            return arr;
        }, [])

        
        console.log("filterSnippets -> res arr", newSnippets)

        return newSnippets;
    }
}

// ###############################################################npm
// ###############################################################
//! AllTags \ allSnippets - probably not needed...

function Index( {snippets, filter, allTags, defaultFilter} ) {
    const [content, dispatch] = useReducer(reducer, {snippets, filter, allTags, defaultFilter, allSnippets: [...snippets]})

    console.group('State');
    const snipTitles = content.snippets.map(item => item.title)
    console.log("Snippets: ", content.snippets.length, snipTitles);
    console.log("Filter: ", content.filter);
    console.groupEnd();

    function handleFiltering(e) {

        if(e.target.classList.contains("selected")) {
            console.log("Disabling filter..");
            dispatch({type: ACTIONS.REMOVE_FILTER, payload: {tag: e.target.value}});
            return
        } else {
            console.log("Adding new filter")
            dispatch({type: ACTIONS.ADD_FILTER, payload: {tag: e.target.value}})
            return
        };
    }
   
    return  <React.Fragment>
                <Layout >
                    <React.Fragment>
                    <div className="flex flex-column mb-6 flex flex-col">
                        <div className="px-64">
                            <p>Nay whatever way delicate passed of avoid might sing whatever all window concealed. Dissuade whole many age mistress late sentiments held doubt scarcely against invitation answer enable. Visited engage steepest shall beyond subject civilly performed concluded offence farther.</p>
                            <div className="tags-filter flex flex-row mt-6">
                                <button className="tag px-2 py-1 border mr-2" onClick={ () => dispatch({type: ACTIONS.RESET})} >RESET</button>
                                <button className="tag px-2 py-1 border" onClick={ () => dispatch({type: ACTIONS.TEST})} >TEST</button>
                                <p className="mx-5"> --- </p>
                                {/* <p>Filters</p> */}
                                {/* <button className="tag px-2 py-1 border mr-2" onClick={sortSnippets} value={filter[prop]}> */}
                                {
                                    content.filter && content.filter.map( (filter, index) => <button className={`tag px-2 py-1 border mr-2 ${filter.isSelected ? 'selected' : ''}`}
                                        disabled={!filter.isActive} key={index} onClick={handleFiltering} value={filter.tag} >
                                            {filter.tag}
                                        </button>
                                    )
                                }
                            </div>
                        </div>
                        <div className="pt-8 flex flex-row flex-wrap items-stretch">
                            {/* <p>Snippet</p><p>Snippet</p><p>Snippet</p> */}
                            {
                                content.snippets && content.snippets.map( (snippet, index) => 
                                    <Snippet snippet={snippet} key={index} tags={snippet.tags} />
                                )
                            }
                        </div>
                    </div>
                    </React.Fragment>
                </Layout>
            </React.Fragment>
}

const Snippet = (props) => {
    return <>
        <div className="p-2 flex-shring-0 w-1/4 flex" >
            <div className="bg-gray-200 p-3">
                <h2 className="pb-2 text-lg leading-5"><a href={`snippets/${props.snippet.slug}`}>{props.snippet.title}</a></h2>
                <p className="text-sm leading-4">{props.snippet.excerpt}</p>
                <span className="snippet-tags flex flex-row pt-2 flex-wrap">
                    {props.tags.map((tag, index) => <p key={index} className="snippet-tag text-sm flex-shrink-0">{tag}</p>)}
                </span>
            </div>
        </div>
    </>
}

export default Index;