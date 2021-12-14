import React from 'react'
import { List } from 'components'
import { BooleanField, Datagrid, TextField, ListProps, ImageField } from 'react-admin'
import ActionsField from 'components/ActionsField'
import RewardsToolbar from './components/RewardsToolbar'
import RewardsFilter from './components/RewardsFilter'

const defaultFilters = { statusEq: 'all' }

const RewardsList = (props: ListProps) => (
  <List
    {...props}
    actions={<RewardsToolbar />}
    filters={<RewardsFilter />}
    filterDefaultValues={defaultFilters}
    bulkActionButtons={false}
  >
    <Datagrid rowClick='show'>
      <TextField source='id' />
      <BooleanField source='physical' />
      <BooleanField source='published' />
      <TextField source='title' />
      <TextField source='subtitle' />
      <ImageField source='image' />
      <TextField source='credits' />
      <TextField source='cost' />
      <ActionsField label='Actions' />
    </Datagrid>
  </List>
)

export default RewardsList
