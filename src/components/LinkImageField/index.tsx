import { FunctionField, FunctionFieldProps, Record, ImageField } from 'react-admin'
import ExternalLink from 'components/ExternalLink'
import React from 'react'
import get from 'lodash/get'

type IProps = Omit<FunctionFieldProps, 'render'>

const LinkImageField: React.FC<IProps> = (props) => (
  <FunctionField
    {...props}
    render={(record: Record | undefined, source: string | undefined) => {
      const value = source ? get(record, source) : null

      return (
        <ExternalLink href={value}>
          <ImageField source={source} />
        </ExternalLink>
      )
    }}
  />
)

export default LinkImageField
