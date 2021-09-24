import React, { useEffect, useState } from "react";
import Head from 'next/head';
import ResumeBlock from "../../components/ResumeBlock.jsx";
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
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
              <Layout isResume={true} name={resume.name} subtitle={resume.subtitle} footerBackground={true} isMobile={isMobile} title="Resume" bg={true}>

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
                  img
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
