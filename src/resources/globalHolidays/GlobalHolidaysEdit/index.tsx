import React from 'react'
import { Edit, EditProps } from 'react-admin'
import GlobalHolidaysForm from '../components/GlobalHolidaysForm'

const GlobalHolidaysEdit = (props: EditProps) => (
  <Edit {...props} actions={false}>
    <GlobalHolidaysForm />
  </Edit>
)

export default GlobalHolidaysEdit
