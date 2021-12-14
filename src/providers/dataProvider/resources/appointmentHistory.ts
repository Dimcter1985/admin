import client from 'api/utils/client'
import { DocumentNode } from 'graphql'
import { GetManyReferenceParams, GetManyReferenceResult, Record as RARecord, Identifier } from 'react-admin'
import gql from 'graphql-tag'
import builder from '../builder'

const defaultQuery = `
  id
  action
  createdAt
  userType
  auditableType
  associatedType
  auditedChanges
  userId
`

const runQuery = (query: DocumentNode, variables: Record<string, Identifier>, options = {}) => (
  client.query({ query, variables, fetchPolicy: 'no-cache', ...options })
)

const newQuery = gql`query AppointmentHistory($appointmentId: Int!) {appointmentHistory(appointmentId: $appointmentId) {data {${defaultQuery}} }}`

const appointmentHistoryDataProvider = builder({
  resource: 'appointmentHistory',
  query: {
    default: defaultQuery,
  },
})

export default {
  ...appointmentHistoryDataProvider,
  getManyReference: <RecordType extends RARecord = RARecord>(
    resource: string,
    { target, id }: GetManyReferenceParams,
  ): Promise<GetManyReferenceResult<RecordType>> => {
    const variables = {
      [`${target}Id`]: id,
    }

    return runQuery(newQuery, variables)
      .then((res) => ({ ...res.data[resource], total: res.data[resource].data.length }))
  },
}
