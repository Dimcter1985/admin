import { List } from 'components'
import { Datagrid, TextField, ReferenceField, BooleanField, ListProps, EmailField } from 'react-admin'
import React from 'react'
import FullNameField from 'components/FullNameField'
import SearchFilter from 'components/SearchFilter'

const ReviewsList = (props: ListProps) => (
  <List
    {...props}
    bulkActionButtons={false}
    filters={<SearchFilter />}
  >
    <Datagrid rowClick='show'>
      <TextField source='id' label='Id' />
      <TextField source='name' />
      <EmailField source='email' />
      <TextField source='points' />
      {/* <ReferenceField source='rewardId' reference='rewards'>
        <TextField source='title' />
      </ReferenceField> */}
      <TextField source='streetAddress' />
      <TextField source='addressLine2' />
      <TextField source='country' />
      <TextField source='city' />
      <TextField source='state' />
      <TextField source='zipCode' />
      <TextField source='phone' />
      <ReferenceField source='customerId' reference='customers'>
        <FullNameField />
      </ReferenceField>
      <BooleanField source='inProcessing' />
    </Datagrid>
  </List>
)

export default ReviewsList
