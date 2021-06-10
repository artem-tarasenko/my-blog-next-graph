import React from "react";

function Footer(props) {


    return  <React.Fragment>
                <footer className="h-24 flex-shrink-0 flex-grow-0 mt-8">
                    <div className="container 2xl mx-auto border-t-2 border-gray-300 py-8">
                        <footer className="container 2xl mx-auto flex flex-col justify-center">
                            <p className="text-center text-gray-400 ">The website was created by using these wonderful products</p>
                            <div className="flex justify-center mt-2 items-center">
                                <img className="mx-4 h-8" src="/icons/vercel.png" />
                                <img className="mx-4 h-12" src="/icons/next.png" />
                                <img className="mx-4 h-8" src="/icons/graph.png" />
                            </div>
                        </footer>
                    </div>
                </footer>
            </React.Fragment>
}

export default Footer;