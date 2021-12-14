import React from 'react'
import { SimpleForm as RASimpleForm } from 'react-admin'
import FormToolbar from '../FormToolbar'

type IProps = React.ComponentProps<typeof RASimpleForm>

const SimpleForm = (props: IProps) => (
  <RASimpleForm
    submitOnEnter={false}
    toolbar={<FormToolbar />}
    {...props}
  />
)

export default SimpleForm
