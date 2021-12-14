import builder from '../builder'

const defaultQuery = `
  id
  customerId
  score
  visits
  loyaltyProgram {
    salonId
  }
`
const loyaltyCardsDataProvider = builder({
  resource: 'loyaltyCards',
  query: {
    default: defaultQuery,
  },
})

export default loyaltyCardsDataProvider
