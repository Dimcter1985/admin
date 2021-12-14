import React from 'react'
import {
  TextInput,
  BooleanInput,
  SimpleFormProps,
  NumberInput,
  ImageInput,
  ImageField,
  Record,
  ReferenceInput,
  SelectInput,
} from 'react-admin'
import pick from 'lodash/pick'
import GridForm from 'components/GridForm'
import validator from '../../validator'

const extractInitialValues = (record: INeighborhood) => ({
  ...(pick(record, ['id', 'name', 'position', 'featured', 'filterable', 'image', 'areaId'])),
  image: {
    url: record.image,
  },
})

export const transform = ({ image, ...values }: Record) => (
  {
    ...values,
    image: image.rawFile,
  }
)

const NeighborhoodsForm = (props: SimpleFormProps) => (
  <GridForm
    {...props}
    record={extractInitialValues(props.record)}
    validate={validator}
  >
    <TextInput source='name' fullWidth />
    <NumberInput source='position' fullWidth min='0' />
    <ImageInput source='image' accept='.jpeg, .jpg, .png, .webp'>
      <ImageField source='url' />
    </ImageInput>
    <ReferenceInput label='Area' source='areaId' reference='areas' fullWidth>
      <SelectInput optionText='name' />
    </ReferenceInput>
    <BooleanInput source='featured' fullWidth />
    <BooleanInput source='filterable' fullWidth />
  </GridForm>
)

export default NeighborhoodsForm as unknown as React.FC
