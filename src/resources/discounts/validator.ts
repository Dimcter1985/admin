import { combineValidators, isRequired } from 'revalidate'

const ReviewsValidator = combineValidators({
  code: isRequired('Code'),
  amount: isRequired('Amount'),
  type: isRequired('Type'),
})

export default ReviewsValidator
