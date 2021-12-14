import builder from '../../builder'

const defaultQuery = `
  id
  salonId
  salon { id name slug }
  serviceNames
  createdAt
  comment
  averageRating
  customer { id firstName lastName }
  reviewerName
  anonymous
  cleanlinessRating
  overallRating
  professionalismRating
  promptnessRating
  startsAt
`

const prepareTypeFilter = (value: 'real' | 'anonymous' | 'fake' | undefined) => {
  if (value === 'real') { return { appointmentIdNull: false } }
  if (value === 'anonymous') { return { anonymousTrue: true } }
  if (value === 'fake') { return { appointmentIdNull: true } }
  return {}
}

const reviewsDataProvider = builder({
  resource: 'reviews',
  query: {
    default: defaultQuery,
  },
  normalizeFilters: ({ statusEq, ...filters }: IApiFilters = {}) => ({
    ...filters,
    ...prepareTypeFilter(statusEq),
  }),
})

export default reviewsDataProvider
