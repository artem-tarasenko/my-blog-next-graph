import React from "react";
import Layout from '../components/Layout.jsx';
import Head from 'next/head'
//! REMOVE THIS LINE LATER
// process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

// ###############################################################
// ###############################################################
function Index() {
    
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
            <Layout transparent={true} footerBackground={false} logoColor="text-gray-100" center={true} bg={true}>
                <div className="flex flex-col justify-center items-center w-3/4 lg:w-2/3 mx-auto lg:flex-grow">
                    <h4 className="upper-title text-gray-600 text-xl lg:text-4xl self-end">Front-end developer</h4>
                    <h1 className="upper-title text-gray-600 text-3xl lg:text-8xl whitespace-nowrap">ARTEM TARASENKO</h1>
                    <div className="mt-16 space-y-3">
                        <h2 className="upper-title text-gray-600 text-lg lg:text-3xl text-center">Done MERN Stack bootcamp</h2>
                        <h2 className="upper-title text-gray-600 text-lg lg:text-3xl text-center">Learning React JS</h2>
                        <h2 className="upper-title text-gray-600 text-lg lg:text-3xl text-center">Love Tailwind CSS</h2>
                        <h2 className="upper-title text-gray-600 text-lg lg:text-3xl text-center">Fiddling with Next JS and Graph CMS</h2>
                    </div>
                </div>
            </Layout>
        </React.Fragment>
}

export default Index;