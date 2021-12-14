import { AppDataProvider } from './builder'
import customersDataProvider from './resources/customers'
import neighborhoodsDataProvider from './resources/neighborhoods'
import rewardsDataProvider from './resources/rewards'
import reviewsDataProvider from './resources/reviews'
import appointmentsDataProvider from './resources/appointments'
import salonsDataProvider from './resources/salons'
import appointmentHistoryDataProvider from './resources/appointmentHistory'
import areasDataProvider from './resources/areas'
import discountsDataProvider from './resources/discounts'
import categoriesDataProvider from './resources/categories'
import servicesDataProvider from './resources/services'
import redemptionsDataProvider from './resources/redemptions'
import giftCardsDataProvider from './resources/giftCards'
import globalHolidaysDataProvider from './resources/globalHolidays'
import loyaltyCardsDataProvider from './resources/loyaltyCards'

const providers = {
  customers: customersDataProvider,
  neighborhoods: neighborhoodsDataProvider,
  rewards: rewardsDataProvider,
  reviews: reviewsDataProvider,
  appointments: appointmentsDataProvider,
  salons: salonsDataProvider,
  appointmentHistory: appointmentHistoryDataProvider,
  areas: areasDataProvider,
  discounts: discountsDataProvider,
  services: servicesDataProvider,
  categories: categoriesDataProvider,
  redemptions: redemptionsDataProvider,
  giftCards: giftCardsDataProvider,
  globalHolidays: globalHolidaysDataProvider,
  loyaltyCards: loyaltyCardsDataProvider,
}

type ResourceName = keyof typeof providers

function getProviderFor(resource: string): AppDataProvider {
  return providers[resource as unknown as ResourceName]
}

const dataProvider: AppDataProvider = {
  getList: (resource, params) => getProviderFor(resource).getList(resource, params),
  getOne: (resource, params) => getProviderFor(resource).getOne(resource, params),
  getMany: (resource, params) => getProviderFor(resource).getMany(resource, params),
  getManyReference: (resource, params) => (
    getProviderFor(resource).getManyReference(resource, params)
  ),
  update: (resource, params) => getProviderFor(resource).update(resource, params),
  // updateMany: (resource, params) => getProviderFor(resource).updateMany(resource, params),
  create: (resource, params) => getProviderFor(resource).create(resource, params),
  delete: (resource, params) => getProviderFor(resource).delete(resource, params),
  deleteMany: (resource, params) => getProviderFor(resource).deleteMany(resource, params),
  updateMany: (resource, params) => getProviderFor(resource).updateMany(resource, params),
}

export default dataProvider
