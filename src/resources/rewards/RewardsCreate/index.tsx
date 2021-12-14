import React from 'react'
import { Create, CreateProps } from 'react-admin'
import RewardsForm, { transform } from '../components/RewardsForm'

const RewardsCreate = (props: CreateProps) => (
  <Create {...props} transform={transform}>
    <RewardsForm />
  </Create>
)

export default RewardsCreate
