import React, { useState, useEffect } from "react";
import Head from 'next/head';
import BlogLayout from "../../components/Blog/BlogLayout.jsx";
import Layout from '../../components/Layout.jsx';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';


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
    const { data: {posts} } = await client.query({
        query: gql`{ 
            posts {
                slug
                title
                date
                createdAt
                excerpt
                tags
                coverImage {
                  url
                }
              } 
        }`
    });

    const { data: {intros} } = await client.query({
        query: gql`{ 
            intros(where: {category: "Blog"}) {
                category
                content
              }
        }`
    });

    return { props: {posts, intros} };
  }




// ###############################################################
// ###############################################################
function Index( {posts, intros} ) {
    //get props from getStaticProps and destructure it to new object
    //recieveing posts prop = ["array from response"], and default empty []
    const [isMobile, setIsMobile] = useState(false);

    useEffect( () => {
    // isMobile = window.innerWidth <= 640;
        setIsMobile( () => window.innerWidth <= 640)
    }, []);

    // .slice() array before sorting to make a copy of it, otherwise it will throw an error
    //something about changing array in a strict mode that is being frozen
    const sortedArray = posts.slice().sort( (a,b) => {
        const date1 = new Date(a.date);
        const date2 = new Date(b.date);

        return date2 - date1;
    });    
    
    return  <React.Fragment>
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
                <Layout intro={intros[0]} padding={true} footerBackground={true} isMobile={isMobile} title="Blog" bg={true}>
                    {posts.length > 0 ? <BlogLayout source={sortedArray} category={"posts"} isMobile={isMobile} /> : <p>Loading...</p>}
                </Layout>
            </React.Fragment>
}

export default Index;