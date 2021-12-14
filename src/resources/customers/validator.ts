import { combineValidators, isRequired, composeValidators } from 'revalidate'
import { isValidEmail } from 'validators'

const ReviewsValidator = combineValidators({
  email: composeValidators(
    isRequired,
    isValidEmail,
  )('Email'),

  firstName: isRequired('First Name'),
  lastName: isRequired('Last Name'),
})

export default ReviewsValidator
