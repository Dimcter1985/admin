import builder from '../builder'

const defaultQuery = `
  id 
  name 
  email 
  points 
  rewardId 
  streetAddress 
  addressLine2 
  country 
  city 
  state 
  zipCode 
  phone 
  customerId 
  inProcessing
  createdAt 
  updatedAt
  `

const redemptionsDataProvider = builder({
  resource: 'redemptions',
  query: {
    default: defaultQuery,
  },
})

export default redemptionsDataProvider
