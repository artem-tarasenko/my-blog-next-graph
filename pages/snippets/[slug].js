import React from "react";
import {useEffect} from "react";
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import {Snippet, SnippetsSideMenu} from "../../components/Snippet.jsx";
import Layout from '../../components/Layout.jsx';
import Prism from "Prismjs"


//! REMOVE THIS LINE LATER
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

// #########################################################################################
// #########################################################################################
const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPH_API,
  cache: new InMemoryCache()
});





// #########################################################################################
// #########################################################################################

function Post( {data, menuData} ) {

  useEffect(() => {
      if (typeof window !== 'undefined') {
          Prism.highlightAll();
      }
  }, []);

    return <>
      <Layout >
        <div className="sidemenu mt-16">
          <SnippetsSideMenu data={menuData} />
        </div>
        <Snippet snippet={data} />
      </Layout>
    </>
}

export default Post








// #########################################################################################
// #########################################################################################
export async function getStaticPaths() {
  const { data: {snippets} } = await client.query(
    {query: gql`{snippets { slug } }`}
  );

  const paths = snippets.map(item => ({params: {slug: item.slug}}));
  return { paths, fallback: false }
}

// #########################################################################################
// #########################################################################################
export async function getStaticProps( {params} ) {
// DESCRIPTION: destructure response to data obj, response data from apollo will be in data prop.
//so destructuring should be for 2 layers
//GraphQL query format - ( { query: *query*, variables: {} } ). Response will be if a form of - {data: {posts: [{post}, {post}]}}
//but with only 1 item in the array - {data: {posts: [{post}]}}, so to get the final object 3 layers must be destructured..
  const { data: {snippets} } = await client.query({
      query: gql`{ 
          snippets {
              title
              slug
              tags
              excerpt
            } 
      }`
  });

  const graphQuery = gql`
    query GetSinglePostQuery($slug: String) { 
        snippets(where: {slug: $slug}) {
            title
            excerpt
            slug
            tags
            content
            repo
            example
            asd22 {
              html
            }
        }
    } 
  `;

const { data: { snippets: [snippet] } } = await client.query(
  {query: graphQuery, variables: {slug: params.slug}}
);

const menuSnippets = snippets.filter( item => item.slug !== snippet.slug )

return { props: {data: snippet, menuData: menuSnippets} }
}
