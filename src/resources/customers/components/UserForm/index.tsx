import React from 'react'
import { TextInput, BooleanInput, SimpleFormProps, ImageInput, ImageField } from 'react-admin'
import pick from 'lodash/pick'
import GridForm from 'components/GridForm'
import validator from '../../validator'
import FormToolbar from './components/FormToolbar'

const extractInitialValues = (record: ICustomer) => ({
  ...(pick(record, ['firstName', 'lastName', 'email', 'id', 'mobile', 'address', 'city', 'state', 'zipCode', 'disabled', 'avatar', 'points', 'credits'])),
  avatar: {
    src: record.avatar,
  },

})

const CustomerForm = (props: SimpleFormProps) => (
  <GridForm
    {...props}
    record={extractInitialValues(props.record)}
    validate={validator}
    toolbar={<FormToolbar />}
  >
    <TextInput source='firstName' fullWidth />
    <TextInput source='lastName' fullWidth />
    <TextInput source='email' fullWidth />
    <TextInput source='mobile' fullWidth />
    <TextInput source='zipCode' fullWidth />
    <TextInput source='address' fullWidth />
    <TextInput source='city' fullWidth />
    <TextInput source='state' fullWidth />
    <ImageInput source='avatar' accept='.jpeg, .jpg, .png, .webp'>
      <ImageField source='src' />
    </ImageInput>
    <BooleanInput source='disabled' />
  </GridForm>
)

export default CustomerForm as unknown as React.FC
