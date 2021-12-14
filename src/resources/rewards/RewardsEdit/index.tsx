import React from 'react'
import { Edit, EditProps } from 'react-admin'
import RewardsForm, { transform } from '../components/RewardsForm'

const RewardsEdit = (props: EditProps) => (
  <Edit {...props} transform={transform}>
    <RewardsForm />
  </Edit>
)

export default RewardsEdit
