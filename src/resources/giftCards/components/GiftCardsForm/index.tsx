import React from 'react'
import { TextInput, BooleanInput, SimpleFormProps, SelectInput, DateTimeInput } from 'react-admin'
import pick from 'lodash/pick'
import GridForm from 'components/GridForm'
import { options } from './consts'
import validator from '../../validator'

const extractInitialValues = (record: IGiftCard) => ({
  ...(pick(record, ['id', 'name', 'email', 'cardAmount', 'recipientName', 'sendDate', 'message', 'code', 'redeemed', 'sent', 'redeemedAt', 'recipientEmail'])),
})

const GiftCardsForm = (props: SimpleFormProps) => (
  <GridForm
    {...props}
    record={extractInitialValues(props.record)}
    validate={validator}
  >
    <TextInput source='name' fullWidth />
    <TextInput source='email' fullWidth />
    <SelectInput source='cardAmount' choices={options} fullWidth />
    <TextInput source='recipientName' fullWidth />
    <TextInput source='recipientEmail' fullWidth />
    <DateTimeInput source='sendDate' fullWidth />
    <TextInput source='message' fullWidth />
    <TextInput source='code' fullWidth />
    <BooleanInput source='redeemed' />
    <BooleanInput source='sent' />
    <div />
    <DateTimeInput source='redeemedAt' fullWidth />
  </GridForm>
)

export default GiftCardsForm as unknown as React.FC
