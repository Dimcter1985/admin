import builder from '../builder'

const defaultQuery = `
  id
  physical
  published
  title
  subtitle
  image
  credits
  cost
  description
  quantity
  createdAt
  updatedAt
`

const prepareTypeFilter = (value: 'publishedTrue' | 'publishedFalse' | undefined) => {
  if (value === 'publishedTrue') { return { publishedTrue: true } }
  if (value === 'publishedFalse') { return { publishedFalse: true } }
  return {}
}

const rewardsDataProvider = builder({
  resource: 'rewards',
  query: {
    default: defaultQuery,
  },
  normalizeFilters: ({ statusEq, ...filters }: IApiFilters = {}) => ({
    ...filters,
    ...prepareTypeFilter(statusEq),
  }),
})

export default rewardsDataProvider
