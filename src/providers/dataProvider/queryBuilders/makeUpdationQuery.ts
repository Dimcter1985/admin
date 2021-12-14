import gql from 'graphql-tag'
import pluralize from 'pluralize'
import { classify } from 'providers/dataProvider/utils'

const makeUpdationQuery = (resource: string, queryFields: string) => gql`
  mutation Update${classify(pluralize.singular(resource))} (
    $id: Int!,
    $payload: Update${classify(pluralize.singular(resource))}Inputs!
  ) {
    update${classify(pluralize.singular(resource))} (
      id: $id,
      payload: $payload
    ) {
      data { ${queryFields} }
      errors { attribute code message fullMessage }
    }
  }
`

export default makeUpdationQuery
