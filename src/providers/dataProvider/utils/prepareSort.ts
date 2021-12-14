import { SortPayload } from 'ra-core'

interface IServerSort {
  sortBy: string;
  order: string;
}

const prepareSort = ({ field, order }: SortPayload): IServerSort => ({
  sortBy: field,
  order,
})

export default prepareSort
