import React from 'react'
import { FunctionField, Record } from 'react-admin'

type IProps = Omit<React.ComponentProps<typeof FunctionField>, 'render'> & { filterValue?: string }

const FullNameField = ({ filterValue, ...props }: IProps) => (
  <FunctionField
    {...props}
    render={(record: Record | undefined) => (
      record ? `${record.firstName || ''} ${record.lastName || ''}` : ''
    )}
  />
)

export default FullNameField
