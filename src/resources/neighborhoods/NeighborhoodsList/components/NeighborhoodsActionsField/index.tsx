import React from 'react'
import { FunctionField, EditButton, DeleteButton } from 'react-admin'

type IProps = Omit<React.ComponentProps<typeof FunctionField>, 'render'>

const NeighborhoodsActionsField = ({ basePath, record, resource, ...props }: IProps) => (
  <FunctionField
    {...props}
    render={() => (
      <>
        <EditButton basePath='/neighborhoods' record={record} />
        <DeleteButton basePath={basePath} record={record} resource={resource} />
      </>
    )}
  />
)

export default NeighborhoodsActionsField
