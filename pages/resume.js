import React, { useEffect, useState } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Layout from '../components/Layout.jsx';
// import GetAppIcon from '@material-ui/icons/GetApp';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import parse from 'html-react-parser';






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
                        <div className="sidebar flex-shrink-0 mt-6 text-left">

                            <div className="contacts pt-8">
                                <h3 className="my-2">CONTACTS:</h3>
                                <div className="flex flex-row items-center"><img className="h-4 pr-4" src="/images/phone.png" /><p>7 914 6707300</p></div>
                                <div className="flex flex-row items-center"><img className="h-3 pr-2" src="/images/mail.png" /><p>Artem.t.88@ya.ru</p></div>
                            </div>
                        </div>

                        <div className="post-body container mr-64">
                            <div className="title flex flex-row justify-between mb-8">
                                <h1 className="">{content.title}</h1>
                                <a className="flex flex-row items-center border px-2 py-2 hover:bg-gray-200 transition duration-300 ease-in-out" href="/">
                                    <p>Download PDF</p><img className="h-4 ml-2" src="/images/pdf.png" />
                                </a>
                            </div>
                            <p>{parse(content.content.html)}</p>
                        </div>
                    </section>
                    <Footer />
                </div>
            </React.Fragment>

    )
}

export default Resume;



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
