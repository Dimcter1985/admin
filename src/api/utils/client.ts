import { createUploadLink } from 'apollo-upload-client'
import { API_URL } from 'api/consts'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloLink } from 'apollo-link'
import { getAuthData } from 'utils'

const cache = new InMemoryCache({
  addTypename: false,
})

const authLink = new ApolloLink((operation, forward) => {
  const auth = getAuthData()
  operation.setContext({
    headers: {
      authorization: auth ? auth.token : '',
    },
  })
  return forward(operation)
})

const uploadLink = createUploadLink({ uri: API_URL })

const client = new ApolloClient({
  link: ApolloLink.from([
    authLink,
    uploadLink,
  ]),
  cache,
})

export default client
