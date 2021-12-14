import { combineValidators, isRequired, composeValidators } from 'revalidate'
import { isValidEmail } from 'validators'

const ReviewsValidator = combineValidators({
  email: composeValidators(
    isRequired,
    isValidEmail,
  )('Email'),
  name: isRequired('Name'),
  recipientName: isRequired('Recipient Name'),
  message: isRequired('Message'),
})

export default ReviewsValidator
