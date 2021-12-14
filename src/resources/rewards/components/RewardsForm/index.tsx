import React from 'react'
import { TextInput, BooleanInput, SimpleFormProps, ImageInput, NumberInput, ImageField, Record } from 'react-admin'
import pick from 'lodash/pick'
import GridForm from 'components/GridForm'
import validator from '../../validator'

const extractInitialValues = (record: IReward) => ({
  ...(pick(record, ['id', 'title', 'subtitle', 'description', 'image', 'cost', 'quantity', 'published', 'physical', 'credits'])),
  image: {
    src: record.image,
  },
})

export const transform = ({ image, ...values }: Record) => ({
  ...values,
  image: image.rawFile,
})

const CustomerForm = (props: SimpleFormProps) => (
  <GridForm
    {...props}
    record={extractInitialValues(props.record)}
    validate={validator}
  >
    <TextInput source='title' fullWidth />
    <TextInput source='subtitle' fullWidth />
    <TextInput source='description' fullWidth />
    <ImageInput source='image' accept='.jpeg, .jpg, .png, .webp'>
      <ImageField source='src' />
    </ImageInput>
    <NumberInput source='cost' fullWidth min='0' />
    <NumberInput source='quantity' fullWidth min='0' />
    <BooleanInput source='published' />
    <BooleanInput source='physical' />
    <NumberInput source='credits' fullWidth min='0' />
  </GridForm>
)

export default CustomerForm as unknown as React.FC
