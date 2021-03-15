// import { useRouter } from 'next/router';
import client from '../../client';
import BlockContent from '@sanity/block-content-to-react';
import imageUrlBuilder from '@sanity/image-url';

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

const Post = (props) => {
  //const router = useRouter()

  const {title = "", body = [], slug = {}, url = {}, mainImage = {}} = props;
  console.log("Destructuring: title", title, "body ", body, "slug ", slug, "main image ", mainImage);
  return (
    <article>
      {mainImage && (
        <div>
          <img
            src={urlFor(mainImage)
              .width(600).url()
              }
          />
        </div>
      )}
      <h1>{props.title}</h1>
      <BlockContent
        blocks={body}
        imageOptions={{ w: 320, h: 240, fit: 'max' }}
        {...client.config()}
      />
    </article>
  )
}

// ===============================

Post.getInitialProps = async function(context) {
  console.log("Context", context);
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.query
  return await client.fetch(`
    *[_type == "post" && slug.current == $slug][0]
  `, { slug })
}

export default Post