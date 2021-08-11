import React, {useState, useEffect} from "react";
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import BlogPost from "../../components/Blog/BlogPost.jsx";
import Layout from '../../components/Layout.jsx';
import Head from 'next/head';

//! REMOVE THIS LINE LATER
// process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

// #########################################################################################
// #########################################################################################
const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPH_API,
  cache: new InMemoryCache()
});





// #########################################################################################
// #########################################################################################
function Post( {post} ) {

  const [isMobile, setIsMobile] = useState(false);

  useEffect( () => {
  // isMobile = window.innerWidth <= 640;
      setIsMobile( () => window.innerWidth <= 640)
  }, [])


  return  <>
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
      <Layout coverImage={post.coverImage.url} toTop={!isMobile} backlink='/posts/' isMobile={isMobile} bg={false} title="blog">
        <BlogPost post={post} isMobile={isMobile} />
      </Layout>
  </>
}

export default Post



// #########################################################################################
// #########################################################################################
export async function getStaticProps( {params} ) {
  //destructure response to data obj, response data from apollo will be in data prop.
  //so destructuring should be for 2 layers
  //GraphQL query format - ( { query: *query*, variables: {} } ). Response will be if a form of - {data: {posts: [{post}, {post}]}}
  //but with only 1 item in the array - {data: {posts: [{post}]}}, so to get the final object 3 layers must be destructured..
  const graphQuery = gql`
    query GetSinglePostQuery($slug: String) { 
      posts(where: {slug: $slug}) {
        slug
        title
        date
        excerpt
        content {
          text
          raw
          markdown
          html
        }
          coverImage {
            url
          }
      }
    } 
  `;
 
  const { data: { posts: [post] } } = await client.query(
    {query: graphQuery, variables: {slug: params.slug}}
  );

  return { props: {post} }
}

// #########################################################################################
// #########################################################################################
// This function gets called at build time
export async function getStaticPaths() {
  const { data: {posts} } = await client.query(
    {query: gql`{posts { slug } }`}
  );

  const paths = posts.map(item => ({params: {slug: item.slug}}));
  return { paths, fallback: false }
}