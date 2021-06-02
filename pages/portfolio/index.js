import React from "react";
//import '../styles/globals.css';

import Project from "../../components/Project.jsx";
import Layout from '../../components/Layout.jsx';
// import { request, GraphQLClient, gql  } from 'graphql-request';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';








// ###############################################################
// ###############################################################
function Index( props ) {
    //get props from getStaticProps and destructure it to new object
    //recieveing posts prop = ["array from response"], and default empty []
    const { projects = [] } = props;
    //console.log("PORTFOLIO RENDER DATA > ", projects);

    return  <React.Fragment>
                <Layout >
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

    return { props: {projects} };
  }
