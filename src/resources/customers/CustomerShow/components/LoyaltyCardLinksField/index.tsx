import React from 'react'
import { FunctionField, EditButton, ShowButton } from 'react-admin'

type IProps = Omit<React.ComponentProps<typeof FunctionField>, 'render'>

const LoyaltyCardLinksField = ({ record, resource, ...props }: IProps) => (
  <FunctionField
    {...props}
    render={() => (
      <>
        <ShowButton basePath='/loyaltyCards' record={record} />
        <EditButton basePath='/loyaltyCards' record={record} />
      </>
    )}
  />
)

export default LoyaltyCardLinksField
