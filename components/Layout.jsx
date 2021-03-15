import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

function Layout(props) {


    return  <React.Fragment>
                <div className="wrapper flex flex-col justify-items-stretch h-full">    
                    <Header />
                    {props.children}
                    <Footer />
                </div>
            </React.Fragment>
}

export default Layout;