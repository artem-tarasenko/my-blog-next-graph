import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

function Layout(props) {


    return  <React.Fragment>
                <div className="wrapper flex flex-col justify-items-stretch h-full">    
                    <Header />
                    <section className="blog flex container 2xl mx-auto my-6 flex-grow">
                        {props.children}

                    </section>
                    
                    <Footer />
                </div>
            </React.Fragment>
}

export default Layout;