import React from 'react'
import { Admin, Resource } from 'react-admin'
import dataProvider from 'providers/dataProvider'
import authProvider from 'providers/authProvider'
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle'
import TodayIcon from '@material-ui/icons/Today'
import TrendingDownIcon from '@material-ui/icons/TrendingDown'
import RedeemIcon from '@material-ui/icons/Redeem'
import RateReviewIcon from '@material-ui/icons/RateReview'
import LocationCityIcon from '@material-ui/icons/LocationCity'
import NoMeetingRoomIcon from '@material-ui/icons/NoMeetingRoom'
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew'
import RedoIcon from '@material-ui/icons/Redo'

import { CustomerList, CustomerEdit, CustomerShow } from 'resources/customers'
import { LoyaltyCardsEdit, LoyaltyCardsShow } from 'resources/loyaltyCards'
import { DiscountList, DiscountShow, DiscountCreate, DiscountEdit } from 'resources/discounts'
import { RewardsList, RewardsCreate, RewardsEdit, RewardsShow } from 'resources/rewards'
import { ReviewsList, ReviewsEdit, ReviewsShow } from 'resources/reviews'
import { AppointmentList, AppointmentShow } from 'resources/appointments'

import { RedemptionsList, RedemptionsShow } from 'resources/redemptions'
import { GiftCardsList, GiftCardsShow, GiftCardsEdit } from 'resources/giftCards'
import { GlobalHolidaysList, GlobalHolidaysCreate, GlobalHolidaysEdit } from 'resources/globalHolidays'
import { NeighborhoodsList, NeighborhoodsCreate, NeighborhoodsEdit } from 'resources/neighborhoods'
import Layout from 'components/Layout'

const App: React.FC = () => (
  <Admin
    layout={Layout}
    authProvider={authProvider}
    dataProvider={dataProvider}
  >
    <Resource name='customers' list={CustomerList} edit={CustomerEdit} show={CustomerShow} icon={SupervisedUserCircleIcon} />
    <Resource name='loyaltyCards' edit={LoyaltyCardsEdit} show={LoyaltyCardsShow} />
    <Resource name='reviews' list={ReviewsList} icon={RateReviewIcon} edit={ReviewsEdit} show={ReviewsShow} />
    <Resource name='appointments' list={AppointmentList} icon={TodayIcon} show={AppointmentShow} />
    <Resource name='appointmentHistory' />
    <Resource name='neighborhoods' list={NeighborhoodsList} create={NeighborhoodsCreate} edit={NeighborhoodsEdit} icon={LocationCityIcon} />
    <Resource name='areas' />
    <Resource name='discounts' list={DiscountList} show={DiscountShow} create={DiscountCreate} edit={DiscountEdit} icon={TrendingDownIcon} />
    <Resource name='services' />
    <Resource name='categories' />
    <Resource name='rewards' list={RewardsList} create={RewardsCreate} edit={RewardsEdit} show={RewardsShow} icon={AccessibilityNewIcon} />
    <Resource name='redemptions' list={RedemptionsList} show={RedemptionsShow} icon={RedoIcon} />
    <Resource
      name='giftCards'
      list={GiftCardsList}
      icon={RedeemIcon}
      options={{ label: 'Gift cards' }}
      show={GiftCardsShow}
      edit={GiftCardsEdit}
    />
    <Resource
      name='globalHolidays'
      list={GlobalHolidaysList}
      create={GlobalHolidaysCreate}
      icon={NoMeetingRoomIcon}
      edit={GlobalHolidaysEdit}
      options={{ label: 'Global holidays' }}
    />
    <Resource name='salons' />
  </Admin>
)

export default App
