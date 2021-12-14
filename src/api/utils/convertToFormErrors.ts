import { FORM_ERROR } from 'final-form'

interface IErrors {
  message?: string;
  errors?: IApiValidationError[];
}

interface IResult {
  [key: string]: string;
}

export default function convertToFormErrors({ message, errors }: IErrors): IResult {
  if (!errors) {
    return { [FORM_ERROR]: `${message}\n` }
  }

  const messages: Record<string, string> = {}

  errors.forEach(({ attribute, message: shorMessage, fullMessage }) => {
    const fieldName = (!attribute || attribute === 'base') ? FORM_ERROR : attribute
    if (!messages[fieldName]) { messages[fieldName] = fullMessage || shorMessage }
  })

  return messages
}
