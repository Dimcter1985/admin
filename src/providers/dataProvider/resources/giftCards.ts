import builder from '../builder'

const defaultQuery = `
  id
  name
  cardAmount
  sendDate
  sent
  redeemed
  code
  recipientName
  email
  phoneNumber
  message
  updatedAt
  createdAt
  redeemedAt
  recipientEmail
`

const giftCardsDataProvider = builder({
  resource: 'giftCards',
  query: {
    default: defaultQuery,
  },
})

export default giftCardsDataProvider
