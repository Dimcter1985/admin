import React from 'react'
import { TextInput, BooleanInput, SimpleFormProps, DateTimeInput, ReferenceArrayInput, AutocompleteArrayInput } from 'react-admin'
import pick from 'lodash/pick'
import GridForm from 'components/GridForm'
import validator from '../../validator'

const extractInitialValues = (record: IGlobalHoliday) => ({
  ...(pick(record, ['id', 'name', 'day', 'active', 'excludedSalonIds'])),
})

const CustomerForm = (props: SimpleFormProps) => (
  <GridForm
    {...props}
    validate={validator}
    record={extractInitialValues(props.record)}
  >
    <TextInput source='name' label='Holiday name' fullWidth />
    <DateTimeInput source='day' label='Date' fullWidth />
    <BooleanInput source='active' fullWidth />
    <ReferenceArrayInput
      source='excludedSalonIds'
      reference='salons'
      fullWidth
      helperText='Select excluded salons'
      label='Select an Salon'
    >
      <AutocompleteArrayInput optionText='name' />
    </ReferenceArrayInput>
  </GridForm>
)

export default CustomerForm as unknown as React.FC
