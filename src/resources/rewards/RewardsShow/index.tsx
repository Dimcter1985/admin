import React from 'react'
import { Show, SimpleShowLayout, TextField, BooleanField, ShowProps, ImageField } from 'react-admin'
import DateTimeField from 'components/DateTimeField'

export const RewardsShow = (props: ShowProps) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source='id' />
      <TextField source='title' />
      <TextField source='subtitle' />
      <TextField source='description' />
      <ImageField source='image' />
      <TextField source='cost' />
      <TextField source='credits' />
      <TextField source='quantity' />
      <BooleanField source='physical' />
      <BooleanField source='published' />
      <DateTimeField source='createdAt' label='Created at' />
      <DateTimeField source='updatedAt' label='Updated at' />
    </SimpleShowLayout>
  </Show>
)

export default RewardsShow
