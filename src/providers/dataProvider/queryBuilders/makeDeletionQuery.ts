import gql from 'graphql-tag'
import pluralize from 'pluralize'
import { classify } from 'providers/dataProvider/utils'

const makeDeletionQuery = (resource: string, queryFields: string) => gql`
  mutation Delete${classify(pluralize.singular(resource))} (
    $id: Int!
  ) {
    delete${classify(pluralize.singular(resource))} (
      id: $id
    ) {
      data { ${queryFields} }
      errors { attribute code message fullMessage }
    }
  }
`

export default makeDeletionQuery
