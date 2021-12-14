import gql from 'graphql-tag'
import { classify } from 'providers/dataProvider/utils'

const makeGetListQuery = (resource: string, queryFields: string) => gql`
  query ${classify(resource)} (
    $pagination: Pagination
    $sort: Sort
    $filters: ${classify(resource)}Filters
  ) {
    ${resource} (
      pagination: $pagination
      sort: $sort
      filters: $filters
    ) {
      data { ${queryFields} }
      total
    }
  }
`

export default makeGetListQuery
