import React from 'react'
import {
  TextInput,
  SimpleFormProps,
  DateTimeInput,
  NumberInput,
  SelectInput,
  BooleanInput,
  ReferenceArrayInput,
  AutocompleteArrayInput,
} from 'react-admin'
import pick from 'lodash/pick'
import GridForm from 'components/GridForm'
import SelectCategoriesInput from 'components/SelectCategoriesInput'
import FullNameField from 'components/FullNameField'
import { options } from './consts'
import validator from '../../validator'

const extractInitialValues = (record: IDiscount) => ({
  ...(pick(record, ['id', 'code', 'amount', 'onlyForNewClients', 'startsAt', 'type', 'endsAt', 'minimumSpend', 'serviceIds', 'salonIds', 'customerIds'])),
})

const DiscountForm = (props: SimpleFormProps) => (
  <GridForm
    {...props}
    record={extractInitialValues(props.record)}
    validate={validator}
  >
    <ReferenceArrayInput
      source='salonIds'
      reference='salons'
      fullWidth
      helperText='Select only if limited to one or multiple'
      label='Salons'
    >
      <AutocompleteArrayInput optionText='name' />
    </ReferenceArrayInput>
    <ReferenceArrayInput
      source='customerIds'
      reference='customers'
      fullWidth
      helperText='Select only if limited to one or multiple'
      label='Customers'
    >
      <AutocompleteArrayInput
        optionText={<FullNameField />}
        matchSuggestion={() => true}
      />
    </ReferenceArrayInput>
    <TextInput source='code' fullWidth />
    <NumberInput source='amount' fullWidth min='0' step={0.1} />
    <DateTimeInput source='startsAt' fullWidth />
    <DateTimeInput source='endsAt' fullWidth label='Expires At' />
    <SelectInput source='type' fullWidth choices={options} />
    <NumberInput source='minimumSpend' fullWidth min='0' />
    <ReferenceArrayInput
      source='serviceIds'
      reference='categories'
      fullWidth
      helperText='Select only if limited to one or multiple'
      label='Select an Services'
    >
      <SelectCategoriesInput source='name' />
    </ReferenceArrayInput>
    <BooleanInput source='onlyForNewClients' fullWidth />
  </GridForm>
)

export default DiscountForm as unknown as React.FC
