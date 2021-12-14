import React from 'react'
import { SaveButton, Toolbar, SaveButtonProps } from 'react-admin'
import ChangeCreditsButton from '../ChangeCreditsButton'
import ChangePointsButton from '../ChangePointsButton'

const FormToolbar = ({ record, ...props }: SaveButtonProps) => (
  <Toolbar>
    <SaveButton redirect='show' label='update registration' {...props} />
    <ChangeCreditsButton {...record} />
    <ChangePointsButton {...record} />
  </Toolbar>
)

export default FormToolbar
