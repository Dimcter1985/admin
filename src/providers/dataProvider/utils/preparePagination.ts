import { PaginationPayload } from 'ra-core'

interface IServerPagination {
  page: number;
  size: number;
}

const preparePagination = ({ page, perPage }: PaginationPayload): IServerPagination => ({
  page, size: perPage,
})

export default preparePagination
