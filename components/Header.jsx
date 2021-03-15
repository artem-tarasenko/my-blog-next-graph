import React from "react";

function Header(props) {


    return  <React.Fragment>
                <header className="flex-shrink-0 flex-grow-0">
                <div className="main-menu">
                    <div className="container 2xl mx-auto flex justify-center h-14 items-center">
                        <p className="px-4">menu 1</p>
                        <p className="px-4">menu 2</p>
                        <p className="px-4">menu 3</p>
                        <p className="px-4">menu 4</p>
                    </div>
                </div>
                <div className="img h-60 bg-gray-200">
                    <p>img</p>
                </div>
                </header>
            </React.Fragment>
}

export default Header;