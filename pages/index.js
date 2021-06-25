import React from "react";
//import '../styles/globals.css';

import Layout from '../components/Layout.jsx';

//! REMOVE THIS LINE LATER
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;




// ###############################################################
// ###############################################################
function Index() {
    
    return  <React.Fragment>

            <Layout transparent={true} footerBackground={false} logoColor="text-gray-100" >
                <div className="flex flex-col justify-center items-center w-2/3 mx-auto">
                    <h4 className="upper-title text-gray-600 text-4xl self-end">Front-end developer</h4>
                    <h1 className="upper-title text-gray-600 text-8xl">ARTEM TARASENKO</h1>
                    <div className="mt-16 flex flex-col items-center space-y-6">
                        <h2 className="upper-title text-gray-600 text-3xl">Done MERN Stack bootcamp</h2>
                        <h2 className="upper-title text-gray-600 text-3xl">Learning React JS</h2>
                        <h2 className="upper-title text-gray-600 text-3xl">Love Tailwind CSS</h2>
                        <h3 className="upper-title text-gray-600 text-3xl">Fiddling with Next JS and Graph CMS</h3>
                    </div>
                </div>
            </Layout>
        </React.Fragment>
}

export default Index;