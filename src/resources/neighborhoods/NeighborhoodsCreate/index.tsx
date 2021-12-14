import React from 'react'
import { Create, CreateProps } from 'react-admin'
import NeighborhoodsForm, { transform } from '../components/NeighborhoodsForm'

const NeighborhoodsCreate = (props: CreateProps) => (
  <Create {...props} transform={transform}>
    <NeighborhoodsForm />
  </Create>
)

export default NeighborhoodsCreate
