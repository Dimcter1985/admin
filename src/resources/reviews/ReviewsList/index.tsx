import { List } from 'components'
import { Datagrid, TextField, ReferenceField, BooleanField, ListProps } from 'react-admin'
import React from 'react'
import DateTimeField from 'components/DateTimeField'
import FullNameField from 'components/FullNameField'
import StringsArrayField from 'components/StringsArrayField'
import ReviewFilter from './components/ReviewFilter'
import RewiewsActionsField from './components/RewiewsActionsField'

const defaultFilters = { statusEq: 'all' }

const ReviewsList = (props: ListProps) => (
  <List
    {...props}
    filters={<ReviewFilter />}
    filterDefaultValues={defaultFilters}
    bulkActionButtons={false}
  >
    <Datagrid rowClick='show'>
      <TextField source='id' label='Id' />
      <TextField source='salonId' label='Salon Id' />
      <TextField source='salon.name' label='Salon' />
      <StringsArrayField source='serviceNames' label='Service Names' />
      <DateTimeField source='startsAt' label='Appointment Starts At' />
      <DateTimeField source='createdAt' label='Date Of Review' />
      <TextField source='comment' label='Comment' />
      <TextField source='averageRating' label='Average Rating' />
      <ReferenceField label='Customer' source='customer.id' reference='customers'>
        <FullNameField />
      </ReferenceField>
      <TextField source='reviewerName' label='Reviewer Name' />
      <BooleanField source='anonymous' label='Anonymus' />
      <RewiewsActionsField label='Actions' />
    </Datagrid>
  </List>
)

export default ReviewsList
