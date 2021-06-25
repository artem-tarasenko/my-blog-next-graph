import React from "react";
import BlogItemShort, { BlogItemLink, BlogItemLeading } from './BlogComponents.jsx';


function BlogLayout(props) {

    //! NEED TO SORT ITEMS BY DATE OF PUBLISHING

    const leadingItem = props.source[0];
    const mainArticles = props.source.slice(1,4);
    const linkedItems = props.source.slice(4)
    

    // console.group("items sorted")
    // console.log("main", mainArticles);
    // console.log("leading", leadingItem);
    // console.log("links", linkedItems);
    // console.groupEnd();

      
    return  <React.Fragment>
                
                
                    <div className="flex flex-column mb-6 z-10">
                        <div className="blog-items">
                            <BlogItemLeading item={leadingItem} category={props.category} />
                            <div className="mt-12 pt-4">
                                {mainArticles.map((item, index) => <BlogItemShort key={index} source={item} category={props.category} />)}
                            </div>
                            <div>
                                <div className="filler w-24 py-8 mr-4 pr-4 text-right border-r-2 border-gray-300"></div>
                                {linkedItems.map((item, index) => <BlogItemLink key={index} item={item} category={props.category} /> )}
                            </div>
                        </div>
                    </div>
                
            </React.Fragment>
}

export default BlogLayout;