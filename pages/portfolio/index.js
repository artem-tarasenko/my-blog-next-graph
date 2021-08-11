import React, { useState, useEffect} from "react";
import Head from 'next/head';
import Project from "../../components/Project.jsx";
import Layout from '../../components/Layout.jsx';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';




// ###############################################################
// ###############################################################
function Index( {projects, intros} ) {
    //get props from getStaticProps and destructure it to new object
    //recieveing posts prop = ["array from response"], and default empty []

    // console.log("PORT INTRO", intros)
    const [isMobile, setIsMobile] = useState(false);

    useEffect( () => {
    // isMobile = window.innerWidth <= 640;
        setIsMobile( () => window.innerWidth <= 640)
    }, [])

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
                <Layout intro={intros[0]} padding={true} footerBackground={true} isMobile={isMobile} title="Portfolio" bg={true}>
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
                publishedAt
                files {
                    url
                }
              }
        }`
    });

    const { data: {intros} } = await client.query({
        query: gql`{ 
            intros(where: {category: "Portfolio"}) {
                category
                content
              }
        }`
    });

    return { props: {projects, intros} };
  }
