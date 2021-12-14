import gql from 'graphql-tag'
import { ERROR_FIELDS_QUERY } from './consts'
import client from './utils/client'
import castError from './utils/castError'

const query = gql`
  mutation revokeAppointment ($id: Int! $payload: RevokeAppointmentInputs!) {
    revokeAppointment(id: $id payload: $payload) {
      data {
        status
        penaltyFee
        revokeReason
      }
      errors { ${ERROR_FIELDS_QUERY} }
    }
  }
`

type StatusType = 'canceled' | 'no_show' | 'done' | string

export interface IParams {
  status: StatusType;
  penaltyFee: number;
  revokeReason: string;
}

export default function revokeAppointment(id: number, params: IParams): Promise<IParams> {
  return client
    .query({ query, variables: { id, payload: params }, fetchPolicy: 'no-cache' })
    .then((res) => castError(res.data.revokeAppointment))
}
