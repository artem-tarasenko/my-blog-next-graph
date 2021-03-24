import React from "react";
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';



// #########################################################################################
// #########################################################################################
const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPH_API,
  cache: new InMemoryCache()
});


// #########################################################################################
// #########################################################################################
// This function gets called at build time
export async function getStaticPaths() {
    const { data: {snippets} } = await client.query(
      {query: gql`{snippets { slug } }`}
    );
  
    const paths = snippets.map(item => ({params: {slug: item.slug}}));
    return { paths, fallback: false }
  }

// #########################################################################################
// #########################################################################################
export async function getStaticProps( {params} ) {
  //destructure response to data obj, response data from apollo will be in data prop.
  //so destructuring should be for 2 layers
  //GraphQL query format - ( { query: *query*, variables: {} } ). Response will be if a form of - {data: {posts: [{post}, {post}]}}
  //but with only 1 item in the array - {data: {posts: [{post}]}}, so to get the final object 3 layers must be destructured..
  const graphQuery = gql`
    query GetSinglePostQuery($slug: String) { 
        snippets(where: {slug: $slug}) {
            title
            slug
            tags
            content{
              html
            }
            repo
            example
        }
    } 
  `;
 
  const { data: { snippets: [snippet] } } = await client.query(
    {query: graphQuery, variables: {slug: params.slug}}
  );

  return { props: {snippet} }
}


// ##################################################
getStaticProps( {params} ) {
    //destructure response to data obj, response data from apollo will be in data prop.
    //so destructuring should be for 2 layers
    //GraphQL query format - ( { query: *query*, variables: {} } ). Response will be if a form of - {data: {posts: [{post}, {post}]}}
    //but with only 1 item in the array - {data: {posts: [{post}]}}, so to get the final object 3 layers must be destructured..
    const graphQuery = gql`
      query GetSinglePostQuery($slug: String) { 
        posts(where: {slug: $slug}) {
          slug
          title
          date
          excerpt
          content {
            text
            raw
            markdown
            html
          }
            coverImage {
              url
            }
        }
      } 
    `;
   
    const { data: { posts: [post] } } = await client.query(
      {query: graphQuery, variables: {slug: params.slug}}
    );
  
    return { props: {post} }
  }
  
  // #########################################################################################
  // #########################################################################################
  // This function gets called at build time
  export async function getStaticPaths() {
    const { data: {posts} } = await client.query(
      {query: gql`{posts { slug } }`}
    );
  
    const paths = posts.map(item => ({params: {slug: item.slug}}));
    return { paths, fallback: false }
  }



// #########################################################################################
// #########################################################################################
function Post( {snippet} ) {
    console.log(snippet);

    return  (
        <React.Fragment>
            <div className="flex flex-column mb-6 flex-row-reverse">

                {/* MAIN ARTICLE */}
                <div className="blog-items mt-5">
                    {props.source.map((item, index) => <BlogItem key={index} source={item} category={props.category} />)}
                </div>


                {/* SIDE MENU */}
                <div className="sidebar flex-shrink-0 text-right mr-8">
                    <p className="category uppercase font-thin text-gray-400 text-2xl text-left ">SNIPPETS</p>
                    <ul className="snippets pt-4 text-lg text-gray-600">
                        {/* {
                            props.source.map((item, index) => <> 
                                <li className="snippet-link text-base text-left pb-3 border-b-2 mb-3" key={index}>
                                    <a onClick={showShippet}>{item.title}</a>
                                    <span className="snippet-tags text-xs uppercase flex flex-row" >
                                        {item.tags.map( (tag,index) => 
                                            <p className="snippet-tag pt-2" key={index}>{tag}</p>
                                        )}
                                    </span>
                                </li>
                            </>)
                        } */}
                        <p>Sidemenu here</p>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Post