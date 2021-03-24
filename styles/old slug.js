import { useRouter } from 'next/router';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
//import client from '../../client';

function Post(props) {
  // const router = useRouter()
  // console.log("SLUG > ", router.query.slug);

  console.log("POST > ", props);
  return <p>TEXT</p>



  // const {title = "", body = [], slug = {}, url = {}, mainImage = {}} = props;
  // console.log("Destructuring: title", title, "body ", body, "slug ", slug, "main image ", mainImage);

  // return (
  //   <article>
  //     {mainImage && (
  //       <div>
  //         <img
  //           src={urlFor(mainImage)
  //             .width(600).url()
  //             }
  //         />
  //       </div>
  //     )}
  //     <h1>{props.title}</h1>
  //     <BlockContent
  //       blocks={body}
  //       imageOptions={{ w: 320, h: 240, fit: 'max' }}
  //       {...client.config()}
  //     />
  //   </article>
  // )
}

// ===============================

// Post.getInitialProps = async function(context) {
//   console.log("Context", context);
//   // It's important to default the slug so that it doesn't return "undefined"
//   const { slug = "" } = context.query
//   return await client.fetch(`
//     *[_type == "post" && slug.current == $slug][0]
//   `, { slug })
// }


// This function gets called at build time
// export async function getStaticProps(context) {

//   console.log("CONTEXT FOR POST > ", context);

//   // const client = new ApolloClient({
//   //     uri: process.env.REACT_APP_GRAPH_API,
//   //     cache: new InMemoryCache()
//   // });

//   // //destructure response to data obj
//   // const { data } = await client.query({
//   //     query: gql`{ 
//   //       posts(where: {id: "ckadrfuu000pe0148kels2b5e"}) {
//   //         id
//   //         title
//   //       }
//   //     }`
//   // });

//   //check what we got from API in console (server-side render fetching)
//   //response would be - posts []
//   //console.log("QUERY DATA, ", data); 
  
//   //return props to main component as an object {posts: response.posts}
//   // return { props: {posts: data.posts} }
//   return {}
// }

// export async function getStaticPaths() {
//   return {
//     paths: [
//       { params: { ... } } // See the "paths" section below
//     ],
//     fallback: true or false // See the "fallback" section below
//   };
// }




// #########################################################################################
// #########################################################################################
// #########################################################################################
// #########################################################################################


// This function gets called at build time
export async function getStaticPaths() {

  const client = new ApolloClient({
    uri: process.env.REACT_APP_GRAPH_API,
    cache: new InMemoryCache()
  });

  const posts = await client.query({
    query: gql`
    { 
      posts {
          slug
        }
    }
  `
  });


  const postsSlugs = posts.data.posts;
  const paths = postsSlugs.map(itemSlug => {params: ({slug: itemSlug})});

  console.log("POSTS SLUGS VAR > ", postsSlugs);
  console.log("PATHS VAR > ", paths);


  // Get the paths we want to pre-render based on posts
              // const paths = posts.map((post) => ({
              //   params: { id: post.id },
              // }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: true }

}

// This also gets called at build time
// export async function getStaticProps({ params }) {
//   // params contains the post `id`.
//   // If the route is like /posts/1, then params.id is 1
//   const res = await fetch(`https://.../posts/${params.id}`)
//   const post = await res.json()



//   // Pass post data to the page via props
//   return { : { post } }
// }




// #########################################################################################
// #########################################################################################
//This function gets called at build time
export async function getStaticProps(props) {

  const client = new ApolloClient({
      uri: process.env.REACT_APP_GRAPH_API,
      cache: new InMemoryCache()
  });

  console.log("SLUG ", props);
  //destructure response to data obj
  const { data } = await client.query({
      query: gql`{ 
          posts {
              tags
              id
              title
              slug
              coverImage {
                url
              }
              excerpt
              content {
                html
                markdown
                text
              }
              date
            } 
      }`
  });

  console.log("Get static props DATA > ", data);
  console.log("Get static props SLUG > ", slug);

  //check what we got from API in console (server-side render fetching)
  //response would be - posts []
  //console.log("QUERY DATA, ", data); 
  
  //return props to main component as an object {posts: response.posts}
  return { props: {testdata: "sometext"} }
}


export default Post