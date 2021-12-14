import React from 'react'
import { List } from 'components'
import { BooleanField, Datagrid, TextField, ListProps, NumberField } from 'react-admin'
import DateTimeField from 'components/DateTimeField'
import ActionsField from 'components/ActionsField'
import DiscountsToolbar from './components/DiscountsToolbar'
import DiscountsFilter from './components/DiscountsFilter'

const defaultFilters = { statusEq: 'all' }

const DiscountList = (props: ListProps) => (
  <List
    {...props}
    actions={<DiscountsToolbar />}
    filters={<DiscountsFilter />}
    filterDefaultValues={defaultFilters}
    bulkActionButtons={false}
  >
    <Datagrid rowClick='show'>
      <TextField source='code' />
      <NumberField source='amount' options={{ maximumFractionDigits: 1 }} />
      <BooleanField source='onlyForNewClients' label='Only For New Clients' />
      <TextField source='type' />
      <DateTimeField source='startsAt' label='Starts At' />
      <DateTimeField source='endsAt' label='Expires At' />
      <ActionsField label='Actions' />
    </Datagrid>
  </List>
)

export default DiscountList
