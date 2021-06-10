import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import BlogItemShort from './BlogItemShort.jsx';
import BlogItemLink from './BlogItemLink.jsx';
import BlogItemLeading from './BlogItemLeading.jsx';


function BlogLayout(props) {

    console.log("ALL", props.source);

    //! NEED TO SORT ITEMS BY DATE OF PUBLISHING

    const leadingItem = props.source[0];
    const mainArticles = props.source.slice(1,4);
    const linkedItems = props.source.slice(4)
    


    // const mainArticles = props.source.slice(1, 3);
    // const leadingItem = mainArticles[0];
    // const linkedItems = mainArticles.slice(4);

    console.group("items sorted")
    console.log("main", mainArticles);
    console.log("leading", leadingItem);
    console.log("links", linkedItems);
    console.groupEnd();
      
    return  <React.Fragment>
                
                <div className="container flex flex-column mb-6 px-32">
                    <div className="blog-items">
                        <BlogItemLeading item={leadingItem} />
                        {/* {mainArticles.map((item, index) => <BlogItemShort key={index} source={item} category={props.category} />)}
                        {linkedItems.map( item => <BlogItemLink item={item} /> )} */}
                    </div>
                </div>
                
            </React.Fragment>
}

export default BlogLayout;