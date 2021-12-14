import gql from 'graphql-tag'
import { classify } from 'providers/dataProvider/utils'

const makeBatchDeletionQuery = (resource: string) => gql`
  mutation Delete${classify(resource)} (
    $ids: [Int!]!
  ) {
    delete${classify(resource)} (
      ids: $ids
    ) {
      data { success }
      errors { attribute code message fullMessage }
    }
  }
`

export default makeBatchDeletionQuery
