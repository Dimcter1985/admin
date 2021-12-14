import { createValidator } from 'revalidate'

const PASSWORD_FORMAT = /^(?=.*[0-9]+.*)(?=.*[A-Z]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{8,}$/

const isValidPassword = createValidator(
  (message) => (value) => {
    if (value && !PASSWORD_FORMAT.test(value)) {
      return message
    }
    return undefined
  },
  'Should contain letters in camelcase and lowercase, numbers and min 8 characters',
)

export default isValidPassword
