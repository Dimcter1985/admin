import { FunctionField, FunctionFieldProps, Record, TextField } from 'react-admin'
import { Link } from 'react-router-dom'
import React from 'react'

type IProps = Omit<FunctionFieldProps, 'render'>

const LinkField: React.FC<IProps> = (props) => (
  <FunctionField
    {...props}
    render={(record: Record | undefined, source: string | undefined) => (
      <Link
        to={`/salons/${record?.salon.id}/show`}
        onClick={(ev: React.SyntheticEvent) => ev.stopPropagation()}
      >
        <TextField source={source} />
      </Link>
    )}
  />
)

export default LinkField
