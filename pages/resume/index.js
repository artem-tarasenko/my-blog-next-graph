import React, { useEffect, useState } from "react";
import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import ResumeBlock from "../../components/ResumeBlock.jsx";
// import GetAppIcon from '@material-ui/icons/GetApp';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import styles from "../../components/ResumeBlock.module.css";

import Layout from '../../components/Layout.jsx';
import BackButton from "../../components/BackButton/BackButton.jsx";



// ###############################################################
// ###############################################################
export default function Resume( {resume = {}} ) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect( () => {
    // isMobile = window.innerWidth <= 640;
        setIsMobile( () => window.innerWidth <= 640)
    }, [])

    return (

            <React.Fragment>
              <Layout isResume={true} name={resume.name} subtitle={resume.subtitle} footerBackground={true} isMobile={isMobile} title="Resume">

                <div className="wrapper flex flex-col justify-items-stretch h-full">
                    
                    <section className="blog container 2xl lg:mx-auto flex-grow">
                        <ResumeBlock resume={resume} isMobile={isMobile}/>
                        { !isMobile && <BackButton top={true} />}
                    </section>
                    
                </div>
              </Layout>
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
                github
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

    // console.log("SSR > ", resume)

    return { props: {resume} };
  }
