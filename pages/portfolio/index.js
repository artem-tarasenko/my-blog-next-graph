import React from "react";
//import '../styles/globals.css';

import Project from "../../components/Project.jsx";
import Layout from '../../components/Layout.jsx';
// import { request, GraphQLClient, gql  } from 'graphql-request';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';




// ###############################################################
// ###############################################################
function Index( {projects, intros} ) {
    //get props from getStaticProps and destructure it to new object
    //recieveing posts prop = ["array from response"], and default empty []


    return  <React.Fragment>
                <Layout intro={intros[0]} padding={true} footerBackground={true} >
                        {projects.length > 1 ? <Project source={projects} test={"testing string"} category={"portfolio"} /> : <p>Loading...</p>}
                </Layout>
            </React.Fragment>
}

export default Index;





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
    const { data: {projects} } = await client.query({
        query: gql`{
            projects {
                title
                slug
                createdAt
                excerpt
                tags
                files {
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

    return { props: {projects, intros} };
  }
