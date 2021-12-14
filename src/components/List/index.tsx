import React from 'react'
import { List as ReactAdminList, Pagination } from 'react-admin'

type IProps = React.ComponentProps<typeof ReactAdminList>

const DEFAULT_SORT = { field: 'created_at', order: 'DESC' }

const List: React.FC<IProps> = ({
  title,
  children,
  filters,
  ...props
}) => (
  <ReactAdminList
    title={title}
    pagination={<Pagination rowsPerPageOptions={[20, 50, 100]} />}
    perPage={20}
    filters={filters}
    sort={DEFAULT_SORT}
    {...props}
  >
    {children}
  </ReactAdminList>
)

export default List
