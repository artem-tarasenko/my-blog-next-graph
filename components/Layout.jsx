import React, {useEffect} from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Prism from "Prismjs";

function TemplateIncludes(props) {

    useEffect(() => {
      Prism.highlightAll();
    }, []);


    return  <React.Fragment>
                <div className="wrapper flex flex-col justify-items-stretch h-full">    
                    <Header />
                    <section className="blog flex flex-col mb-6 flex-grow flex-shrink-0">
                        {props.children}

                    </section>
                    <Footer />
                </div>
            </React.Fragment>
}

function TemplateWrapper( props ) {

    return <>
        <div className={`mx-auto container ${props.classes}`}>
            {props.children}
        </div>
    </>
}

export default TemplateIncludes;
export {TemplateWrapper}