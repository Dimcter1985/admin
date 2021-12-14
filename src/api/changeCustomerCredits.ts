import gql from 'graphql-tag'
import { ERROR_FIELDS_QUERY } from './consts'
import client from './utils/client'
import castError from './utils/castError'

const query = gql`
  mutation changeCustomerCredits  ($id: Int! $payload: ChangeCustomerCreditsInputs!) {
    changeCustomerCredits(id: $id payload: $payload) {
      data {
        credits
      }
      errors { ${ERROR_FIELDS_QUERY} }
    }
  }
`

export interface IParams {
  credits: number;
}

export default function changeCustomerPoints(
  id: string | number | undefined,
  params: IParams,
): Promise<IParams> {
  return client
    .query({ query, variables: { id, payload: params }, fetchPolicy: 'no-cache' })
    .then((res) => castError(res.data.changeCustomerCredits))
}
