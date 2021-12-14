import React from 'react'
import { TextField, ReferenceField, ShowProps, SimpleShowLayout, BooleanField, Show, EmailField } from 'react-admin'
import DateTimeField from 'components/DateTimeField'
import FullNameField from 'components/FullNameField'
import RedemptionsToolbar from './components/RedemptionsToolbar'

export const ReviewsShow = (props: ShowProps) => (
  <Show {...props} actions={<RedemptionsToolbar />}>
    <SimpleShowLayout>
      <TextField source='id' />
      {/* <ReferenceField label='Reward' source='rewardId' reference='rewards'>
        <TextField source='title' />
      </ReferenceField> */}
      <TextField source='name' />
      <EmailField source='email' />
      <TextField source='points' />
      <TextField source='streetAddress' />
      <TextField source='addressLine2' />
      <TextField source='country' />
      <TextField source='city' />
      <TextField source='state' />
      <TextField source='zipCode' />
      <TextField source='phone' />
      <ReferenceField label='Customer' source='customerId' reference='customers'>
        <FullNameField />
      </ReferenceField>
      <DateTimeField source='createdAt' title='Created At' />
      <DateTimeField source='updatedAt' title='Updated At' />
      <BooleanField source='inProcessing' />
    </SimpleShowLayout>
  </Show>
)

export default ReviewsShow
