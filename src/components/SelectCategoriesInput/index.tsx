import React from 'react'
import { InputProps, Record } from 'react-admin'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import ListSubheader from '@material-ui/core/ListSubheader'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

const makeOptions = (categories: Record) => {
  const options: React.ReactElement[] = []
  categories.forEach((cat: Record) => {
    options.push(<ListSubheader key={`category-${cat.id}`} disableSticky>{cat.name}</ListSubheader>)
    cat.services.forEach((service: Record) => {
      options.push(<MenuItem key={`service-${service.id}`} value={service.id}>{service.name}</MenuItem>)
    })
  })
  return options
}

const SelectCategoriesInput = ({ choices, input }: InputProps) => {
  const arrayValue = Array.isArray(input?.value) ? input?.value : []

  return (
    <FormControl fullWidth>
      <InputLabel htmlFor='grouped-select'>Services</InputLabel>
      <Select
        defaultValue={[]}
        id='grouped-select'
        multiple
        value={arrayValue}
        onChange={input?.onChange}
      >
        <MenuItem value=''>
          <em>Services</em>
        </MenuItem>
        {
          makeOptions(choices)
        }
      </Select>
    </FormControl>
  )
}

export default SelectCategoriesInput
