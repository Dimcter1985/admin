import React from 'react'
import { List } from 'components'
import {
  BooleanField,
  Datagrid,
  ReferenceField,
  TextField,
  ListProps,
  ArrayField,
  SingleFieldList,
  ChipField,
} from 'react-admin'
import DateField from 'components/DateField'
import TimeField from 'components/TimeField'
import FullNameField from 'components/FullNameField'
import PhoneField from 'components/PhoneField'
import ActionFiltersToolbar from 'components/ActionFiltersToolbar'
import AppointmentActionsField from 'components/AppointmentActionsField'
import ShowSalonsField from '../components/ShowSalonsField'
import AppointmentFilter from './components/AppointmentFilter'

// const defaultFilters = { statusEq: 'all' }

const AppointmentList = (props: ListProps) => (
  <List
    {...props}
    bulkActionButtons={false}
    filters={<AppointmentFilter />}
    // filterDefaultValues={defaultFilters}
    actions={<ActionFiltersToolbar />}
  >
    <Datagrid rowClick='show'>
      <AppointmentActionsField label='Actions' />
      <TextField source='id' label='Appt Id' />
      <DateField source='bookedAt' label='Book Date' />
      <TimeField source='bookedAt' label='Book Time' />
      <ShowSalonsField source='salon.name' label='Salon' />
      <PhoneField source='salon.phone' label='Salon Phone' sortable={false} />
      <ReferenceField
        source='customerId'
        reference='customers'
        label='Customer'
        link='show'
      >
        <FullNameField />
      </ReferenceField>
      <ArrayField source='salonServices' label='Services' sortable={false}>
        <SingleFieldList>
          <ChipField source='name' />
        </SingleFieldList>
      </ArrayField>
      <DateField source='startsAt' label='Appt Date' />
      <TimeField source='startsAt' label='Starts Time' />
      <TextField source='status' />
      <TextField source='cost' label='Sevice Cost' />
      <TextField source='tax' />
      <TextField source='serviceFee' label='Customer Fee' />
      <TextField source='tip' />
      <TextField source='grossAmount' label='Gross Amount' sortable={false} />
      <TextField source='credits' label='Wallet' />
      <TextField source='netAmount' label='Net Amount' sortable={false} />
      <TextField source='comission' />
      <TextField source='snailzCut' label='Snailz Cut' sortable={false} />
      <TextField source='processingFee' label='Processing' />
      <TextField source='salonAmount' label='Salon Amount' />
      <TextField source='deviceType' label='Device' />
      <TextField source='httpReferer' label='Http Refferer' />
      <BooleanField source='modifiedBeforeStart' label='Modified Before Start' />
      <BooleanField source='modifiedAfterStart' label='Modified After Start' />
    </Datagrid>
  </List>
)

export default AppointmentList
