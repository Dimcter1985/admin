import gql from 'graphql-tag'
import pluralize from 'pluralize'
import { classify } from 'providers/dataProvider/utils'

const makeGetOneQuery = (resource: string, queryFields: string) => gql`
  query ${classify(pluralize.singular(resource))} (
    $id: Int!
  ) {
    ${pluralize.singular(resource)} (
      id: $id
    ) {
      ${queryFields}
    }
  }
`

export default makeGetOneQuery
