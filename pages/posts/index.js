import React, { useState, useEffect } from "react";
//import '../styles/globals.css';

import BlogLayout from "../../components/Blog/BlogLayout.jsx";
import Layout from '../../components/Layout.jsx';
// import { request, GraphQLClient, gql  } from 'graphql-request';
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
    }, [])
    
    return  <React.Fragment>
                <Layout intro={intros[0]} padding={true} footerBackground={true} isMobile={isMobile} title="Blog">
                    {posts.length > 1 ? <BlogLayout source={posts} category={"posts"} isMobile={isMobile} /> : <p>Loading...</p>}
                </Layout>
            </React.Fragment>
}

export default Index;