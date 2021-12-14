import { FunctionField, FunctionFieldProps, Record, Button } from 'react-admin'
import ExternalLink from 'components/ExternalLink'
import React from 'react'
import get from 'lodash/get'

type IProps = Omit<FunctionFieldProps, 'render'> & {label?: string}

const ViewLink: React.FC<IProps> = ({ label = 'View', ...props }) => (
  <FunctionField
    {...props}
    render={(record: Record | undefined, source: string | undefined) => {
      const value = source ? get(record, source) : ''

      return (
        <ExternalLink href={`https://staging.snailzapp.com/${value}`}>
          <Button label={label} />
        </ExternalLink>
      )
    }}
  />
)

export default ViewLink
