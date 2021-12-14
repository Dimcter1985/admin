import { FunctionField, FunctionFieldProps, Record } from 'react-admin'
import React from 'react'
import get from 'lodash/get'
import InputLabel from '@material-ui/core/InputLabel'

type IProps = Omit<FunctionFieldProps, 'render'>

const options: Intl.DateTimeFormatOptions = {
  month: 'short',
  year: 'numeric',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
}

const DateTimeField: React.FC<IProps> = ({ title, ...props }) => (
  <FunctionField
    {...props}
    render={(record: Record | undefined, source: string | undefined) => {
      const value = source ? get(record, source) : null
      return (
        <>
          <InputLabel shrink>{title}</InputLabel>
          {value ? new Date(value).toLocaleString('en-US', options) : null}
        </>

      )
    }}
  />
)

export default DateTimeField
