import builder from '../builder'

const defaultQuery = `
  id
  referralCode
  createdAt
  firstName
  lastName
  email
  zipCode
  address
  deviceType
  mobile
  aboutUs
  bookedAtSalon
  bookedAtSnailz
  disabled
  address
  avatar
  points
  credits
`
const singleQuery = `
  ${defaultQuery}
  city 
  state
  appointments {
    id
    bookedAt 
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
  }
  loyaltyCards {
    id
    customerId
    score
    visits
    loyaltyProgram {
      salonId
      salon {
        name
      }
    }
  }
`

const prepareTypeFilter = (value: 'disabled' | undefined) => {
  if (value === 'disabled') { return { disabledTrue: true } }
  return {}
}

const customersDataProvider = builder({
  resource: 'customers',
  query: {
    default: defaultQuery,
    getOne: singleQuery,
    create: singleQuery,
    update: singleQuery,
  },
  normalizePayload: ({ role, password, ...values }) => ({
    ...values,
    password: password || undefined,
  }),
  normalizeFilters: ({ statusEq, ...filters }: IApiFilters = {}) => ({
    ...filters,
    ...prepareTypeFilter(statusEq),
  }),
})

export default customersDataProvider
