import builder from '../builder'

const defaultQuery = `
  id
  name
`

const servicesDataProvider = builder({
  resource: 'services',
  query: {
    default: defaultQuery,
  },
})

export default servicesDataProvider
