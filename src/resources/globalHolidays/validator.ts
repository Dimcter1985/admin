import { combineValidators, isRequired } from 'revalidate'

const ReviewsValidator = combineValidators({
  name: isRequired('Name'),
  day: isRequired('Date'),
})

export default ReviewsValidator
