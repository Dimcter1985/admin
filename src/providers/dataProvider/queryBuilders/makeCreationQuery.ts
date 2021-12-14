import gql from 'graphql-tag'
import pluralize from 'pluralize'
import { classify } from 'providers/dataProvider/utils'

const makeCreationQuery = (resource: string, queryFields: string) => gql`
  mutation Create${classify(pluralize.singular(resource))} (
    $payload: Create${classify(pluralize.singular(resource))}Inputs!
  ) {
    create${classify(pluralize.singular(resource))} (
      payload: $payload
    ) {
      data { ${queryFields} }
      errors { attribute code message fullMessage }
    }
  }
`

export default makeCreationQuery
