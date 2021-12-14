import builder from '../builder'

const defaultQuery = 'id code amount onlyForNewClients startsAt type endsAt minimumSpend serviceIds salonIds customerIds'

const prepareTypeFilter = (value: 'active' | 'expired' | 'future' | undefined) => {
  if (value === 'active') { return { active: true } }
  if (value === 'expired') { return { expired: true } }
  if (value === 'future') { return { future: true } }
  return {}
}

const customersDataProvider = builder({
  resource: 'discounts',
  query: {
    default: defaultQuery,
  },
  normalizeFilters: ({ statusEq, ...filters }: IApiFilters = {}) => ({
    ...filters,
    ...prepareTypeFilter(statusEq),
  }),
})

export default customersDataProvider
