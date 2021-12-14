import React from 'react'
import { FunctionField, EditButton } from 'react-admin'
import ToggleActiveButton from '../ToggleActiveButton'

type IProps = Omit<React.ComponentProps<typeof FunctionField>, 'render'>

const HolidaysActionsField = ({ basePath, record, ...props }: IProps) => (
  <FunctionField
    {...props}
    render={(data?: object) => (
      <>
        <EditButton basePath='/globalHolidays' record={record} />
        <ToggleActiveButton {...data} />
      </>
    )}
  />

)

export default HolidaysActionsField
