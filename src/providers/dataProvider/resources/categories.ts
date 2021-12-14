import builder from '../builder'

const defaultQuery = 'id name services {id name}'

const customersDataProvider = builder({
  resource: 'categories',
  query: {
    default: defaultQuery,
  },
})

export default customersDataProvider
