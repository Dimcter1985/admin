import React from 'react'
import { FunctionField, EditButton } from 'react-admin'
import CustomerDisabledButton from '../CustomerDisabledButton'

type IProps = Omit<React.ComponentProps<typeof FunctionField>, 'render'>

const NeighborhoodsActionsField = ({ basePath, record, ...props }: IProps) => (
  <FunctionField
    {...props}
    render={(data?: object) => (
      <>
        <EditButton basePath={basePath} record={record} />
        <CustomerDisabledButton {...data} />
      </>
    )}
  />
)

export default NeighborhoodsActionsField
