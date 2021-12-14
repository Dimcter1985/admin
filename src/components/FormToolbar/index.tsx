import React from 'react'
import { SaveButton, Toolbar } from 'react-admin'

type IProps = React.ComponentProps<typeof Toolbar>

const FormToolbar = (props: IProps) => {
  const isNew = !props.record?.id

  return (
    <Toolbar {...props}>
      <SaveButton
        label='Save and Continue'
        redirect={isNew ? 'show' : false}
        submitOnEnter={props.submitOnEnter}
      />
      <SaveButton
        label='Save and Close'
        redirect='list'
        submitOnEnter={false}
        variant='text'
      />
    </Toolbar>
  )
}

export default FormToolbar
