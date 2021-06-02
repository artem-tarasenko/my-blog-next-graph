import React from "react";
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import BlogPost from "../../components/BlogPost.jsx";
import Blog from "../../components/blog.jsx";


//! REMOVE THIS LINE LATER
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;






export default function Post( {project} ) {
  return  <BlogPost post={project} />
}




// #########################################################################################
//         NEXT JS SSR
// #########################################################################################
const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPH_API,
  cache: new InMemoryCache()
});

export async function getStaticProps( {params} ) {
  //destructure response to data obj, response data from apollo will be in data prop.
  //so destructuring should be for 2 layers
  //GraphQL query format - ( { query: *query*, variables: {} } ). Response will be if a form of - {data: {posts: [{post}, {post}]}}
  //but with only 1 item in the array - {data: {posts: [{post}]}}, so to get the final object 3 layers must be destructured..
  const graphQuery = gql`
    query GetSingleProjectQuery($slug: String) { 
      projects(where: {slug: $slug}) {
        slug
        title
        excerpt
        tags
        content {
          html
        }
      }
    } 
  `;
 
  const { data: { projects: [project] } } = await client.query(
    {query: graphQuery, variables: {slug: params.slug}}
  );

  return { props: {project} }
}

// This function gets called at build time
export async function getStaticPaths() {
  const { data: {projects} } = await client.query(
    {query: gql`{projects { slug } }`}
  );

  const paths = projects.map(item => ({params: {slug: item.slug}}));
  return { paths, fallback: false }
}