import React from 'react'
import { List } from 'components'
import { BooleanField, Datagrid, TextField, ListProps } from 'react-admin'
import DateField from 'components/DateField'
import SearchFilter from 'components/SearchFilter'
import HolidaysActionsField from './components/HolidaysActionsField'
import GlobalHolidaysToolbar from './components/GlobalHolidaysToolbar'

const GlobalHolidaysList = (props: ListProps) => (
  <List
    {...props}
    bulkActionButtons={false}
    actions={<GlobalHolidaysToolbar />}
    filters={<SearchFilter />}
  >
    <Datagrid>
      <TextField source='id' />
      <TextField source='name' label='Holiday Name' />
      <DateField source='day' label='Date' />
      <BooleanField source='active' />
      <TextField source='excludedSalonsCount' label='Excluded Salons' />
      <HolidaysActionsField label='Actions' />
    </Datagrid>
  </List>
)

export default GlobalHolidaysList
