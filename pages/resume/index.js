import React, { useEffect, useState } from "react";
import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import ResumeBlock from "../../components/ResumeBlock.jsx";
import Layout from '../../components/Layout.jsx';
// import GetAppIcon from '@material-ui/icons/GetApp';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';







// ###############################################################
// ###############################################################
export default function Resume( {resume = {}} ) {
    // const resume = resumes[0];

    console.log("#### Resume content #### ", resume);

    return (

            <React.Fragment>
                <div className="wrapper flex flex-col justify-items-stretch h-full">
                    <Header />
                    <section className="blog container 2xl mx-auto my-6 flex-grow">
                        <ResumeBlock resume={resume} />
                    </section>
                    <Footer />
                </div>
            </React.Fragment>

    )
}





// ###############################################################
//        NEXT JS SSR
// ###############################################################
const client = new ApolloClient({
    uri: process.env.REACT_APP_GRAPH_API,
    cache: new InMemoryCache()
});

// This function gets called at build time
export async function getStaticProps() {
    //destructure response to data obj
    const { data: {resume} } = await client.query({
        query: gql`{
            resume(where: {slug: "resume"}) {
                email
                linkedin
                location
                name
                number
                subtitle
                summary {
                  text
                }
                skills {
                  title
                  value
                }
                pic {
                  url
                }
                softSkills {
                  html
                }
                website
                workExperience {
                  html
                }
                education {
                    html
                  }
              }
            }`
    });

    console.log("SSR > ", resume)

    return { props: {resume} };
  }
