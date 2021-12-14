import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const classify = (str: string): string => upperFirst(camelCase(str))

export default classify
