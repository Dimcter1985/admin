import React from 'react'
import { Edit, EditProps } from 'react-admin'
import LoyaltyCardsForm from '../components/LoyaltyCardsForm'

const LoyaltyCardsEdit = (props: EditProps) => (
  <Edit {...props} actions={false}>
    <LoyaltyCardsForm />
  </Edit>
)

export default LoyaltyCardsEdit
