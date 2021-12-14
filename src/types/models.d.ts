declare type UserRole = 'admin' | 'comedian' | 'venue' | 'customer'

declare interface IRecord {
  id: string;
  _destroy: boolean;
}

declare interface IProfile extends IRecord {
  id: number;
  birthday: string;
  email: string;
  firstName: string;
  lastName: string;
  token: string;
}

declare interface ILoyaltyProgram extends IRecord {
  salonId: number;
}

declare interface ILoyaltyCard extends IRecord {
  id: number;
  customerId: number;
  score: number;
  visits: number;
  loyaltyProgram: ILoyaltyProgram;
}

declare interface ICustomer extends IRecord {
  id: number;
  referralCode: string;
  birthday: string;
  email: string;
  firstName: string;
  lastName: string;
  token: string;
  zipCode: string;
  deviceType: string;
  mobile: string;
  createdAt: string;
  aboutUs: string | null;
  bookedAtSalon: boolean;
  bookedAtSnailz: boolean;
  avatar: string;
  loyaltyCards: ILoyaltyCard[];
  points: number;
  credits: number;
}

declare interface IReward extends IRecord {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  cost: number;
  quantity: number;
  published: boolean;
  physical: boolean;
  credits: number;
}

declare interface IReview extends IRecord {
  id: number;
  salonId: number;
  serviceNames: string[];
  createdAt: string;
  comment: string;
  averageRating: string;
  reviewerName: string;
  anonymous: boolean;
  salon: ISalon;
  customer: ICustomer;
  appointment: IAppointment;
  cleanlinessRating: number;
  overallRating: number;
  professionalismRating: number;
  promptnessRating: number;
  startsAt: string;
}

declare interface INeighborhood extends IRecord {
  id: number;
  name: string;
  featured: boolean;
  filterable: boolean;
  position: number;
  slug: string;
  image: IMedia;
  areaId: number;
}

declare interface IMedia extends IRecord {
  url: string;
}

declare interface IDiscount extends IRecord {
  id: number;
  code: string;
  amount: number;
  onlyForNewClients: boolean;
  startsAt: string;
  type: string;
  endsAt: string;
  minimumSpend: number;
  serviceIds: number[];
}

declare interface IService extends IRecord {
  id: number;
  name: string;
}

declare interface ICategory extends IRecord {
  id: number;
  name: string;
  services: IService;
}

declare interface ISalon extends IRecord {
  id: number;
  name: string;
  slug: string;
  settings: ISalonSettings;
}

declare interface ISalonSettings extends IRecord {
  cancelationFee: number;
  cancelationFeeType: number;
  noShowFee: number;
  noShowFeeType: number;
}

declare interface IAppointment extends IRecord {
  id: number;
  startsAt: string;
  salon: ISalon;
  cost: number;
  status: string;
  paymentTransactions: IPaymentTransaction[];
}

declare interface IAppointmentHistory extends IRecord {
  id: number;
  action: string;
  createdAt: string;
  userType: string;
  auditableType: string;
  associatedType: string;
  auditedChanges: JSON;
  userId: number;
}

declare interface IRedemption extends IRecord {
  id: number;
  name: string;
  email: string;
  points: string;
  rewardId: number;
  streetAddress: string;
  addressLine2: string;
  country: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  customerId: number;
  inProcessing: boolean;
  createdAt: string;
}

declare interface IGiftCard extends IRecord {
  id: number;
  name: string;
  cardAmount: number;
  sendDate: string;
  sent: boolean;
  redeemed: boolean;
  code: string;
  recipientName: string;
  email: string;
  phoneNumber: string;
  message: string;
}

declare interface IGlobalHoliday extends IRecord {
  id: number;
  active: boolean;
  createdAt: string;
  day: string;
  excludedSalonIds: number[];
  excludedSalonsCount: number;
  name: string;
  updatedAt: string;
}

declare interface IPaymentTransaction extends IRecord {
  id: number;
  type: string;
  status: string;
  amount: number;
  serviceFeeAmount: number;
}
