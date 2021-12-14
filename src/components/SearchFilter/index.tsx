import React from 'react'
import { Filter, SearchInput, FilterProps } from 'react-admin'

const SearchFilter = (props: Omit<FilterProps, 'children'>) => (
  <Filter {...props}>
    <SearchInput source='searchByQuery' alwaysOn />
  </Filter>
)

export default SearchFilter
