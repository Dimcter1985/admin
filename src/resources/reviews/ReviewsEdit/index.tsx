import React from 'react'
import { Edit, EditProps } from 'react-admin'
import ReviewsForm from '../components/ReviewsForm'

const ReviewsEdit = (props: EditProps) => (
  <Edit
    {...props}
    undoable={false}
    hasShow={false}
  >
    <ReviewsForm />
  </Edit>
)

export default ReviewsEdit
