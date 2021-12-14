import builder from '../builder'

const defaultQuery = `
  id
  bookedAt
  customerId
  salon {
    id
    name
    phone
    settings {
      appointmentServicesLimit
      cancelationFee
      cancelationFeePeriod
      cancelationFeeType
      getPaidVisibleFrom
      noShowFee
      noShowFeeType
      noShowVisibleFrom
      pointsByReview
      processingFixed
      processingRelative
    }
  }
  customer {
    id
    firstName
    lastName
    email
  }
  salonServices {
    id
    name
    cost
  }
  startsAt
  createdAt
  status
  salonId
  customerId
  cost
  tax
  tip
  grossAmount
  netAmount
  comission
  snailzCut
  processingFee
  salonAmount
  deviceType
  serviceFee
  credits
  httpReferer
  modifiedAfterStart
  modifiedBeforeStart
  penaltyFee
  discount {
    id
    code
  }
  discountAmount
  discountId
  referralCode
  specialRequests
  totalAmount
  paymentTransactions {
    id
    createdAt
    type
    transactionId
    amount
    serviceFeeAmount
    status
    errorMessage
  }
`
const appointmentsDataProvider = builder({
  resource: 'appointments',
  query: {
    default: defaultQuery,
  },
})

export default appointmentsDataProvider
