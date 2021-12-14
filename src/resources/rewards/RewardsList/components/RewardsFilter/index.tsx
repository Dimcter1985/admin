import React from 'react'
import { SelectInput, Filter, FilterProps, SearchInput } from 'react-admin'
import { options } from './consts'

const RewardsFilter = (props: Omit<FilterProps, 'children'>) => (
  <Filter {...props}>
    <SearchInput source='searchByQuery' alwaysOn />
    <SelectInput label='Sort' source='statusEq' choices={options} alwaysOn />
  </Filter>
)

export default RewardsFilter
