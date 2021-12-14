import React from 'react'
import { Edit, EditProps, Record } from 'react-admin'
import UserForm from '../components/UserForm'

export const transform = ({ avatar, points, credits, ...values }: Record) => ({
  ...values,
  avatar: avatar.rawFile,
})

const UserEdit = (props: EditProps) => (
  <Edit {...props} undoable={false} transform={transform}>
    <UserForm />
  </Edit>
)

export default UserEdit
