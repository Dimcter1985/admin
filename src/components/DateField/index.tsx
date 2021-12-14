import { FunctionField, Record, FunctionFieldProps } from 'react-admin'
import React from 'react'
import date from 'utils/date'
import InputLabel from '@material-ui/core/InputLabel'

type IProps = Omit<FunctionFieldProps, 'render'>

const DateField: React.FC<IProps> = ({ title, ...props }) => (
  <FunctionField
    {...props}
    render={(record: Record | undefined, source: string | undefined) => (
      <>
        <InputLabel shrink>{title}</InputLabel>
        {
          (record && source && record[source])
            ? date(record[source]).format('YYYY-MM-DD')
            : null
        }
      </>

    )}
  />
)

export default DateField
