import builder from '../builder'

const defaultQuery = 'id name featured filterable position slug image {url} areaId'

const neighborhoodsDataProvider = builder({
  resource: 'neighborhoods',
  query: {
    default: defaultQuery,
  },
})

export default neighborhoodsDataProvider
