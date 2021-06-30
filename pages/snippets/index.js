import React, { useReducer } from "react";
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import Layout from '../../components/Layout.jsx';
// import IntroBlock from "../../components/IntroBlock.jsx";
import styles from "./../../components/IntroBlock.module.css";


//! REMOVE THIS LINE LATER
// process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

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

    const { data: {intros} } = await client.query({
        query: gql`{ 
            intros(where: {category: "Snippets"}) {
                category
                content
              }
        }`
    });

    //collecting all possible tags for snippets to pass them as default value
    let tagsArray = []
    snippets.forEach(snippet => snippet.tags.forEach(tag => !tagsArray.includes(tag) && tagsArray.push(tag)));

    let newArr = [];
    tagsArray.forEach(item => newArr.push({tag: item, isActive: true, isSelected: false}));
    const initialContent = { snippets: snippets, filter: newArr, allTags: tagsArray, defaultFilter: newArr, intro: intros[0] }

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
    
    switch(action.type) {
        case ACTIONS.ADD_FILTER: {
            console.log("-- Reducer, ADD --")
            const updatedFilter = content.filter.map( item => item.tag === action.payload.tag ? {...item, isSelected: true} : {...item});
            const updatedSnippets = filterSnippets(updatedFilter);
            // console.log("Adding to current state: ", updatedSnippets.length)

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
                // console.log("Resetting filter to default values")
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
        // console.log("filterSnippets -> tags", activeTags)


        const newSnippets = initState.reduce( (arr, snippet) => { 
            activeTags.forEach( tag => {
                if(snippet.tags.includes(tag) && (!arr.some(item => item.slug === snippet.slug))) {
                    arr.push(snippet)
                }
            })
            return arr;
        }, [])

        
        // console.log("filterSnippets -> res arr", newSnippets)

        return newSnippets;
    }
}

// ###############################################################npm
// ###############################################################

function Index( {snippets, filter, allTags, defaultFilter, intro} ) {
    const [content, dispatch] = useReducer(reducer, {snippets, filter, allTags, defaultFilter, allSnippets: [...snippets]})
    const snipTitles = content.snippets.map(item => item.title)

    function handleFiltering(e) {

        if(e.target.classList.contains("selected")) {
            // console.log("Disabling filter..");
            dispatch({type: ACTIONS.REMOVE_FILTER, payload: {tag: e.target.value}});
            return
        } else {
            // console.log("Adding new filter")
            dispatch({type: ACTIONS.ADD_FILTER, payload: {tag: e.target.value}})
            return
        };
    }
  
    return  <React.Fragment>

                <Layout intro={intro} padding={false} footerBackground={true} >
                    <div className="flex flex-column my-6 flex-col">
                        <div className="px-64">
                            <div className="tags-filter flex flex-row mt-2">
                                {
                                    content.filter && content.filter.map( (filter, index) => <button className={`tag px-2 py-1 border mr-2 ${filter.isSelected ? 'selected' : ''}`}
                                        disabled={!filter.isActive} key={index} onClick={handleFiltering} value={filter.tag} >
                                            {filter.tag}
                                        </button>
                                    )
                                }
                            </div>
                        </div>
                        <div className="snippets py-8 flex flex-row flex-wrap items-stretch">
                            {
                                content.snippets && content.snippets.map( (snippet, index) => 
                                    <Snippet snippet={snippet} key={index} tags={snippet.tags} />
                                )
                            }
                        </div>
                    </div>
                </Layout>
                
            </React.Fragment>
}               

const Snippet = (props) => {
    return <>
        <div className="p-2 flex-shring-0 w-1/4 flex" >
            <div className={`${styles.introBGSoft} p-3`}>
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