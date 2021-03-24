import React from "react";
//import '../styles/globals.css';

import Blog from "../../components/Blog.jsx";
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

    return { props: {posts} };
  }




// ###############################################################
// ###############################################################
function Index( props ) {
    //get props from getStaticProps and destructure it to new object
    //recieveing posts prop = ["array from response"], and default empty []
    const { posts = [] } = props;
    //console.log("INITIAL POSTS DATA > ", posts);
    
    return  <React.Fragment>
                <Layout >
                    {posts.length > 1 ? <Blog source={posts} test={"testing string"} category={"posts"} /> : <p>Loading...</p>}
                </Layout>
            </React.Fragment>
}

export default Index;