import React from 'react'
import { FunctionField, EditButton, DeleteButton } from 'react-admin'
import ViewLink from 'components/ViewLink'

type IProps = Omit<React.ComponentProps<typeof FunctionField>, 'render'>

const RewiewsActionsField = ({ basePath, record, resource, ...props }: IProps) => (
  <FunctionField
    {...props}
    render={() => (
      <>
        <ViewLink source='salon.slug' />
        <EditButton basePath={basePath} record={record} />
        <DeleteButton basePath={basePath} record={record} resource={resource} />
      </>
    )}
  />
)

export default RewiewsActionsField
