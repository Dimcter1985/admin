import React from 'react'
import { FunctionField, EditButton, ShowButton } from 'react-admin'

type IProps = Omit<React.ComponentProps<typeof FunctionField>, 'render'>

const ActionsField = ({ basePath, record, ...props }: IProps) => (
  <FunctionField
    {...props}
    render={() => (
      <>
        <ShowButton basePath={basePath} record={record} />
        <EditButton basePath={basePath} record={record} />
      </>
    )}
  />
)

export default ActionsField
