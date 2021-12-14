import React from 'react'
import { FunctionField, Record } from 'react-admin'
import ShowDialogButton from './components/ShowDialogButton'

type IProps = Omit<React.ComponentProps<typeof FunctionField>, 'render'>

const AppointmentActionsField = (props: IProps) => (
  <FunctionField
    {...props}
    render={(record?: Record | undefined) => (
      <ShowDialogButton {...record} />
    )}
  />
)

export default AppointmentActionsField
