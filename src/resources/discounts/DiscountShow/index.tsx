import React from 'react'
import {
  Show,
  SimpleShowLayout,
  TextField,
  BooleanField,
  ShowProps,
  NumberField,
  ReferenceArrayField,
  SingleFieldList,
} from 'react-admin'
import DateTimeField from 'components/DateTimeField'
import FullNameField from 'components/FullNameField'

export const DiscountsShow = (props: ShowProps) => (
  <Show {...props} hasEdit>
    <SimpleShowLayout>
      <ReferenceArrayField source='salonIds' reference='salons'>
        <SingleFieldList>
          <TextField source='name' />
        </SingleFieldList>
      </ReferenceArrayField>
      <ReferenceArrayField source='customerIds' reference='customers'>
        <SingleFieldList>
          <FullNameField />
        </SingleFieldList>
      </ReferenceArrayField>
      <TextField source='id' />
      <TextField source='code' />
      <TextField source='amount' />
      <TextField source='type' />
      <DateTimeField source='startsAt' label='Starts At' />
      <DateTimeField source='endsAt' label='Expires At' />
      <BooleanField source='onlyForNewClients' />
      <NumberField source='minimumSpend' />
      <ReferenceArrayField source='serviceIds' reference='services'>
        <SingleFieldList>
          <TextField source='name' />
        </SingleFieldList>
      </ReferenceArrayField>
    </SimpleShowLayout>
  </Show>
)

export default DiscountsShow
