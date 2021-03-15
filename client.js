import { GraphQLClient, gql } from 'graphql-request'

async function client(query) {
  const endpoint = 'https://api.graph.cool/simple/v1/cixos23120m0n0173veiiwrjr'

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: 'Bearer MY_TOKEN',
    },
  })

  const data = await graphQLClient.request(query)
  console.log(JSON.stringify(data, undefined, 2))
}

client().catch((error) => console.error(error));

export default client;