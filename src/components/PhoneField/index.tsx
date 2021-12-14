import { FunctionField, FunctionFieldProps, Record } from 'react-admin'
import { Link } from '@material-ui/core'
import React from 'react'

type IProps = Omit<FunctionFieldProps, 'render'>

const PhoneField: React.FC<IProps> = (props) => (
  <FunctionField
    {...props}
    render={(record: Record | undefined) => (
      <Link
        onClick={(ev: React.SyntheticEvent) => (ev.stopPropagation())}
        underline='none'
        href={`tel:${record?.salon.phone}`}
      >
        {record?.salon.phone}
      </Link>
    )}
  />
)

export default PhoneField
