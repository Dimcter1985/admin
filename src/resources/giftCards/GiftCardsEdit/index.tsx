import React from 'react'
import { Edit, EditProps } from 'react-admin'
import GiftCardsForm from '../components/GiftCardsForm'

const GiftCardsEdit = (props: EditProps) => (
  <Edit {...props} undoable={false} hasShow={false}>
    <GiftCardsForm />
  </Edit>
)

export default GiftCardsEdit
