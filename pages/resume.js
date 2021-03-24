import React, { useEffect, useState } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Layout from '../components/Layout.jsx';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import parse from 'html-react-parser';



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
    const { data: {pages} } = await client.query({
        query: gql`{ 
            pages(where: {slug:"resume"}) {
                title
                    content {
                        html
                    }
                }
            }`
    });

    return { props: {pages} };
  }


// ###############################################################
// ###############################################################
function Resume( {pages = {}} ) {
    const content = pages[0];
    
    //console.log("#### Resume content #### ", content);

    return (
        
            <React.Fragment>
                <div className="wrapper flex flex-col justify-items-stretch h-full">
                    <Header />
                    <section className="blog flex container 2xl mx-auto my-6 flex-grow">
                        <div className="post-body container mx-64">
                            <h1>{content.title}</h1>
                            <p>{parse(content.content.html)}</p>
                        </div>
                    </section>
                    <Footer />
                </div>
            </React.Fragment>

    )
}

export default Resume;