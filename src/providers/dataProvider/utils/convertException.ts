import { HttpError } from 'react-admin'

export default function convertException(error: Error) {
  if (error instanceof HttpError) {
    return Promise.reject(error)
  }

  return Promise.reject(new HttpError(
    error.message,
    422,
    {},
  ))
}
