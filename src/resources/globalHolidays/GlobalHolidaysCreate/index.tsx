import React from 'react'
import { Create, CreateProps } from 'react-admin'
import GlobalHolidaysForm from '../components/GlobalHolidaysForm'

const GlobalHolidays = (props: CreateProps) => (
  <Create {...props}>
    <GlobalHolidaysForm />
  </Create>
)

export default GlobalHolidays
