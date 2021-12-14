import gql from 'graphql-tag'
import { classify } from 'providers/dataProvider/utils'

const makeBatchUpdationQuery = (resource: string, queryFields: string) => gql`
  mutation Update${classify(resource)} (
    $ids: [Int!]!,
    $payload: Update${classify(resource)}Inputs!
  ) {
    update${classify(resource)} (
      ids: $ids,
      payload: $payload
    ) {
      data { ${queryFields} }
      errors { attribute code message fullMessage }
    }
  }
`

export default makeBatchUpdationQuery
