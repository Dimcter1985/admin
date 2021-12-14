import React from 'react'
import {
  TextInput,
  BooleanInput,
  SimpleFormProps,
  NumberInput,
  DateTimeInput,
} from 'react-admin'
import pick from 'lodash/pick'
import GridForm from 'components/GridForm'
import StringsArrayInput from '../StringArrayInput'
import validator from './validator'

const extractInitialValues = (record: IReview) => ({
  ...(pick(record, ['id', 'reviewerName', 'comment', 'createdAt', 'serviceNames', 'anonymous', 'startsAt', 'promptnessRating', 'professionalismRating', 'overallRating', 'cleanlinessRating'])),
})

const ReviewsForm = (props: SimpleFormProps) => (
  <GridForm
    {...props}
    record={extractInitialValues(props.record)}
    validate={validator}
  >
    <TextInput source='reviewerName' fullWidth />
    <NumberInput source='promptnessRating' fullWidth min='1' max='5' />
    <NumberInput source='cleanlinessRating' fullWidth min='1' max='5' />
    <NumberInput source='professionalismRating' fullWidth min='1' max='5' />
    <NumberInput source='overallRating' fullWidth min='1' max='5' />
    <TextInput source='comment' fullWidth />
    <DateTimeInput source='createdAt' fullWidth label='Date of review' />
    <DateTimeInput source='startsAt' fullWidth label='Appointment starts at' />
    <StringsArrayInput />
    <BooleanInput source='anonymous' />
  </GridForm>
)

export default ReviewsForm as unknown as React.FC
