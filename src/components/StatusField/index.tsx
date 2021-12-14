import React from 'react'
import { FunctionField, Record } from 'react-admin'
import get from 'lodash/get'

interface IProps {
  source: string;
  label?: string;
}

const StatusField: React.FC<IProps> = (props) => (
  <FunctionField
    label='Status'
    {...props}
    render={(record: Record | undefined) => (
      <span>{get(record, 'disabled') ? 'Disabled' : 'Active'}</span>
    )}
  />
)

export default StatusField
