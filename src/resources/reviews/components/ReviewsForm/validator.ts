import { combineValidators, isRequired } from 'revalidate'

const ReviewsValidator = combineValidators({
  reviewerName: isRequired('Name'),
  cleanlinessRating: isRequired('Cleanliness Rating'),
  overallRating: isRequired('Overall Rating'),
  professionalismRating: isRequired('Professionalism Rating'),
  promptnessRating: isRequired('Promptness Rating'),
})

export default ReviewsValidator
