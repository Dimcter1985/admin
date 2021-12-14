import gql from 'graphql-tag'
import { ApolloQueryResult } from 'apollo-client'
import { ERROR_FIELDS_QUERY } from './consts'
import { castError } from './utils/castError'
import client from './utils/client'

const query = gql`
  mutation SignIn($email: String!, $password: String!) {
    createSession(payload: {email: $email, password: $password}) {
      data {
        id
        firstName
        lastName
        email
        token
      }
      errors { ${ERROR_FIELDS_QUERY} }
    }
  }
`

export interface IParams {
  username: string;
  password: string;
}

export default function signIn({ username, password }: IParams): Promise<IProfile> {
  return client
    .query({ query, variables: { email: username, password }, fetchPolicy: 'no-cache' })
    .then((res: ApolloQueryResult<{ createSession: IApiMutationResponse<IProfile> }>) => (
      castError(res.data.createSession)
    ))
}
