import React, {useState, useEffect} from "react";
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import Head from 'next/head';
import ProjectFull from "../../components/ProjectFull.jsx";
import Layout from '../../components/Layout.jsx';


//! REMOVE THIS LINE LATER
// process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;




export default function Post( {project, links} ) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect( () => {
    setIsMobile( () => window.innerWidth <= 640)
  }, [])

  return <>
    <Head>
        <title>AT Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="AT Blog" key="title" />
        <meta name="description" content="Personal website with blog, resume and portfolio." />
        <meta name="keywords" content="Frontend, developer, blog, artem, tarasenko, javascript, snippets, react, vercel, next, graphcms, web, dev, resume" />
        <meta name="author" content="Artem Tarasenko" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
                    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
    </Head>
    <Layout coverImage={project.files.url} toTop={!isMobile} backlink='/portfolio/' transparent={true} title="Portfolio" bg={false}>
        <ProjectFull project={project} links={links} isMobile={isMobile} />
    </Layout>
   </>
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
        files {
          url
        }
      }
    } 
  `;

  const { data: { projects: [project] } } = await client.query(
    {query: graphQuery, variables: {slug: params.slug}}
  );

  //find 2 links for prev and next article
  const links = await client.query(
    {query: gql`{
      projects { 
          slug
          title
        } 
      }`
    }
  );

  const index = links.data.projects.findIndex( item => item.slug == params.slug);
  const prevLink = links.data.projects[index-1] ?? null;
  const nextLink = links.data.projects[index+1] ?? null;

  return { props: {project, links: {prev: prevLink, next: nextLink}} }
}

// This function gets called at build time
export async function getStaticPaths() {
  const { data: {projects} } = await client.query(
    {query: gql`{projects { slug } }`}
  );

  const paths = projects.map(item => ({params: {slug: item.slug}}));
  return { paths, fallback: false }
}