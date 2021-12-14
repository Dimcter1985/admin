import React from 'react'
import { Edit, EditProps } from 'react-admin'
import NeighborhoodsForm, { transform } from '../components/NeighborhoodsForm'

const NeighborhoodsEdit = (props: EditProps) => (
  <Edit
    {...props}
    undoable={false}
    transform={transform}
  >
    <NeighborhoodsForm />
  </Edit>
)

export default NeighborhoodsEdit
