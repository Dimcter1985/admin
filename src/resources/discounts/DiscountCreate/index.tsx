import React from 'react'
import { Create, CreateProps } from 'react-admin'
import DiscountForm from '../components/DiscountForm'

const DiscountCreate = (props: CreateProps) => (
  <Create {...props}>
    <DiscountForm />
  </Create>
)

export default DiscountCreate
