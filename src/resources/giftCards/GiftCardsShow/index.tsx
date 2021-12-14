import React from 'react'
import { Show, SimpleShowLayout, TextField, BooleanField, ShowProps } from 'react-admin'
import DateTimeField from 'components/DateTimeField'
import ShowToolbar from './components/ShowToolbar'

export const GiftCardsShow = (props: ShowProps) => (
  <Show {...props} actions={<ShowToolbar />}>
    <SimpleShowLayout>
      <TextField source='id' label='Id' />
      <TextField source='name' />
      <TextField source='email' />
      <TextField source='phoneNumber' />
      <TextField source='cardAmount' />
      <TextField source='recipientName' />
      <TextField source='recipientEmail' />
      <DateTimeField source='sendDate' title='Send Date' />
      <TextField source='message' />
      <TextField source='code' />
      <BooleanField source='sent' />
      <BooleanField source='redeemed' />
      <DateTimeField source='redeemedAt' title='Redeemed At' />
      <DateTimeField source='createdAt' title='Purchased At' />
      <DateTimeField source='updatedAt' title='Updated At' />
    </SimpleShowLayout>
  </Show>
)

export default GiftCardsShow
