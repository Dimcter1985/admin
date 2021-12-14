import { List } from 'components'
import { Datagrid, TextField, BooleanField, ListProps } from 'react-admin'
import React from 'react'
import DateTimeField from 'components/DateTimeField'
import SearchFilter from 'components/SearchFilter'
import GiftCardsActionsField from './components/GiftCardsActionsField'

const GiftCardsList = (props: ListProps) => (
  <List
    {...props}
    bulkActionButtons={false}
    filters={<SearchFilter />}
  >
    <Datagrid rowClick='show'>
      <TextField source='id' label='Id' />
      <TextField source='name' />
      <TextField source='cardAmount' />
      <DateTimeField source='createdAt' label='Purchased At' />
      <DateTimeField source='sendDate' />
      <BooleanField source='sent' />
      <BooleanField source='redeemed' />
      <DateTimeField source='redeemedAt' label='Redeemed At' />
      <TextField source='code' />
      <TextField source='recipientName' />
      <GiftCardsActionsField label='Actions' />
    </Datagrid>
  </List>
)

export default GiftCardsList
