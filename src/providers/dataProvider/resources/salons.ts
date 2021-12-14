import builder from '../builder'

const defaultQuery = `
  id
  name
  phone
  slug
`

const salonsDataProvider = builder({
  resource: 'salons',
  query: {
    default: defaultQuery,
  },
})

export default salonsDataProvider
