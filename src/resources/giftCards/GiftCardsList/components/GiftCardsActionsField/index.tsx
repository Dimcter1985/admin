import React from 'react'
import { FunctionField, EditButton, ShowButton, DeleteButton } from 'react-admin'

type IProps = Omit<React.ComponentProps<typeof FunctionField>, 'render'>

const GiftCardsActionsField = ({ basePath, record, resource, ...props }: IProps) => (
  <FunctionField
    {...props}
    render={() => (
      <>
        <ShowButton basePath='/giftCards' record={record} />
        <EditButton basePath='/giftCards' record={record} />
        <DeleteButton basePath='/giftCards' record={record} />
      </>
    )}
  />
)

export default GiftCardsActionsField
