import isString from 'lodash/isString'

const toI = (value: string | number): number => (isString(value) ? parseInt(value, 10) : value)

export default toI
