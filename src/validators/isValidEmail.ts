import { createValidator } from 'revalidate'
import isEmail from 'validator/lib/isEmail'

const isValidEmail = createValidator(
  (message) => (value) => ((value && !isEmail(value)) ? message : undefined),
  'Invalid email',
)

export default isValidEmail
