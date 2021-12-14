import { HttpError } from 'react-admin'
import convertToFormErrors from './convertToFormErrors'

export function castError<T>({ data, errors }: IApiMutationResponse<T>): T {
  if (!errors) return data
  if (errors && errors.length) {
    const message = errors[0].fullMessage || errors[0].message
    throw new HttpError(
      message,
      422,
      convertToFormErrors({ message, errors }),
    )
  }
  throw new HttpError('Undefined error', 500)
}

export default castError
