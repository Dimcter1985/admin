import builder from '../builder'

const defaultQuery = 'id name'

const areasDataProvider = builder({
  resource: 'areas',
  query: {
    default: defaultQuery,
  },
})

export default areasDataProvider
