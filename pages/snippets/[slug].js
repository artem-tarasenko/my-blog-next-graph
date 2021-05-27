import React from "react";
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import Snippet from "../../components/Snippet.jsx";
import Layout from '../../components/Layout.jsx';


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
// This function gets called at build time
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
  //destructure response to data obj, response data from apollo will be in data prop.
  //so destructuring should be for 2 layers
  //GraphQL query format - ( { query: *query*, variables: {} } ). Response will be if a form of - {data: {posts: [{post}, {post}]}}
  //but with only 1 item in the array - {data: {posts: [{post}]}}, so to get the final object 3 layers must be destructured..
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
        }
    } 
  `;
 
  const { data: { snippets: [snippet] } } = await client.query(
    {query: graphQuery, variables: {slug: params.slug}}
  );

  console.log("SNIPPET SINGLE SLUG DATA #### ", snippet);

  return { props: {snippet} }
}


// ##################################################
// getStaticProps({params}) {
//     //destructure response to data obj, response data from apollo will be in data prop.
//     //so destructuring should be for 2 layers
//     //GraphQL query format - ( { query: *query*, variables: {} } ). Response will be if a form of - {data: {posts: [{post}, {post}]}}
//     //but with only 1 item in the array - {data: {posts: [{post}]}}, so to get the final object 3 layers must be destructured..
//     const graphQuery = gql`
//       query GetSinglePostQuery($slug: String) { 
//         posts(where: {slug: $slug}) {
//           slug
//           title
//           date
//           excerpt
//           content {
//             text
//             raw
//             markdown
//             html
//           }
//             coverImage {
//               url
//             }
//         }
//       } 
//     `;
   
//     const { data: { posts: [post] } } = await client.query(
//       {query: graphQuery, variables: {slug: params.slug}}
//     );
  
//     return { props: {post} }
//   }
  
  // #########################################################################################
  // #########################################################################################
  // This function gets called at build time
  // export async function getStaticPaths() {
  //   const { data: {posts} } = await client.query(
  //     {query: gql`{posts { slug } }`}
  //   );
  
  //   const paths = posts.map(item => ({params: {slug: item.slug}}));
  //   return { paths, fallback: false }
  // }



// #########################################################################################
// #########################################################################################
function Post( {snippet} ) {
    console.log("SNIPPET >", snippet);

    return <>
      <Layout >
        <div className="sidemenu">
          Side menu here
        </div>
        <Snippet snippet={snippet} />
      </Layout>
    </>
}

export default Post