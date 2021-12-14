import React from 'react'
import { Edit, EditProps } from 'react-admin'
import DiscountForm from '../components/DiscountForm'

const DiscountEdit = (props: EditProps) => (
  <Edit {...props} actions={false}>
    <DiscountForm />
  </Edit>
)

export default DiscountEdit
