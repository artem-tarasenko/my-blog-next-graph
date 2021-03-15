import React, { useEffect, useState } from "react";
import Link from 'next/link';
import groq from 'groq';
import client from '../client';
//import '../styles/globals.css';

import Blog from "../components/Blog.jsx";
import Layout from '../components/Layout.jsx';
import { request, GraphQLClient, gql  } from 'graphql-request';


const Index = (props) => {
    // const [posts, setPosts] = useState([{}])

    // useEffect(initPosts, [])

    const { posts = [] } = props;
    
    return  <React.Fragment>
                <Layout >
                    {/* {props.posts.length > 1 ? <Blog source={posts} test={"testing string"} /> : <p>Loading...</p>} */}
                </Layout>
            </React.Fragment>

    // return (
    //   <div>
    //     <h1>Welcome to a blog!</h1>
    //     {posts.map(
    //       ({ _id, title = '', slug = '', _updatedAt = '' }) =>
    //         slug && (
    //           <li key={_id}>
    //             <Link href="/posts/[slug]" as={`/posts/${slug.current}`}>
    //               <a>{title}</a>
    //             </Link>{' '}
    //             ({new Date(_updatedAt).toDateString()})
    //           </li>
    //         )
    //     )}
    //   </div>
    // )
}

const endpoint = "https://api-eu-central-1.graphcms.com/v2/ckm5wfx4hhhng01xhe7gfaavz/master";
const query = gql`
{
    posts {
        id
        title
    }
}
`

// ###############################################################
// ###############################################################



// Run GraphQL queries/mutations using a static function
    // request(endpoint, query, variables).then((data) => console.log(data))

// ... or create a GraphQL client instance to send requests
    // const client = new GraphQLClient(endpoint, { headers: {} })
    // client.request(query, variables).then((data) => console.log(data))


// ###############################################################
// ###############################################################

// This function gets called at build time
export async function getStaticProps() {
    // Call an external API endpoint to get posts
    // const res = await fetch('https://.../posts')
    // const posts = await res.json()

    // const posts = request(endpoint, query).then((data) => data);

    // const temp = request(endpoint, query).then(data => data).catch(console.error);
    // console.log("TEMP", temp);

    const client = new GraphQLClient(endpoint, {
        credentials: 'include',
        mode: 'cors',
      })
    client.request(query).then((data) => console.log(data))

    //console.log("FETCHING DATA GQL: ", posts);
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    // return {
    //   props: {
    //     posts,
    //   },
    // }
    return { props: { } }
  }



// FETCH DATA FROM SEP FUNC
//   export async function getStaticProps({ preview = false }) {
//     const posts = (await getAllPostsForHome(preview)) || []
//     return {
//       props: { posts, preview },
//     }
//   }

export default Index

