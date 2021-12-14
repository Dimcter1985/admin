import { combineValidators, isRequired } from 'revalidate'

const comediansValidator = combineValidators({
  title: isRequired('Title'),
  cost: isRequired('Cost'),
  image: isRequired('Image'),
  credits: isRequired('Credits'),
  quantity: isRequired('Quantity'),
  physical: isRequired('Physical'),
})

export default comediansValidator
