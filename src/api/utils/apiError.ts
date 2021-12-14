export default class ApiError extends Error {
  errors: IApiValidationError[] | undefined

  constructor(message: string, errors?: IApiValidationError[]) {
    super(message)
    if (Error.captureStackTrace) Error.captureStackTrace(this, ApiError)
    this.name = 'ApiError'
    this.message = message
    this.errors = errors
  }
}
