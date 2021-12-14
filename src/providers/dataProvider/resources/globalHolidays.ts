import builder from '../builder'

const defaultQuery = `
  id
  active
  createdAt
  day
  excludedSalonIds
  excludedSalonsCount
  name
  updatedAt
`

const globalHolidaysDataProvider = builder({
  resource: 'globalHolidays',
  query: {
    default: defaultQuery,
  },
})

export default globalHolidaysDataProvider
