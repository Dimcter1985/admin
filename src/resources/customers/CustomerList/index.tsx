import React from 'react'
import { List } from 'components'
import { BooleanField, Datagrid, TextField, ListProps } from 'react-admin'
import DateField from 'components/DateField'
import TimeField from 'components/TimeField'
import ActionFiltersToolbar from 'components/ActionFiltersToolbar'
import CustomerActionsField from './components/CustomerActionsField'
import CustomerFilter from './components/CustomerFlter'

const defaultFilters = { statusEq: 'all' }

const UserList = (props: ListProps) => (
  <List
    {...props}
    bulkActionButtons={false}
    filters={<CustomerFilter />}
    filterDefaultValues={defaultFilters}
    actions={<ActionFiltersToolbar />}
  >
    <Datagrid rowClick='show'>
      <CustomerActionsField label='Actions' />
      <TextField source='id' label='Registration ID' />
      <TextField source='referralCode' label='Customer ID' />
      <DateField source='createdAt' label='Registration date' />
      <TimeField source='createdAt' label='Registration time' sortable={false} />
      <TextField source='firstName' />
      <TextField source='lastName' />
      <TextField source='email' />
      <TextField source='zipCode' />
      <TextField source='deviceType' />
      <TextField source='mobile' />
      <TextField source='aboutUs' />
      <BooleanField source='bookedAtSalon' />
      <BooleanField source='bookedAtSnailz' />
    </Datagrid>
  </List>
)

export default UserList
