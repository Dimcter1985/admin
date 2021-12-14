/* eslint-disable camelcase */
declare interface IAddressComponent {
  long_name: string;
  short_name: string;
  types: string[];
}

declare interface IAddressDetails {
  formatted_address: string;
  address_components: IAddressComponent[];
}
/* eslint-enable camelcase */
