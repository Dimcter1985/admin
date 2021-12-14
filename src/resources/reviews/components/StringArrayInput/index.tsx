import React, { useMemo, useCallback, useState } from 'react'
import { useGetList } from 'react-admin'
import Autocomplete from '@material-ui/lab/Autocomplete'
import TextField from '@material-ui/core/TextField'
import { useField } from 'react-final-form'
import throttle from 'lodash/throttle'

interface IProps {
  onChange: (value: string[]) => void;
  value: string[];
}

const StringsArrayInput: React.FC<IProps> = ({
  onChange,
  value,
}) => {
  const [query, setQuery] = useState('')
  const filters = useMemo(() => ({ searchByQuery: query }), [query])
  const setQueryDelay = useMemo(() => throttle(setQuery, 200), [])

  const { data, ids } = useGetList(
    'services',
    { page: 1, perPage: 25 },
    { field: 'id', order: 'ASC' },
    filters,
  )
  const options = useMemo(() => ids.map((id) => data[id].name), [ids, data])

  const handleChange = useCallback((_event, values: string[]) => {
    onChange(values)
  }, [onChange])

  const handleTextChange = useCallback((_event, val: string) => {
    setQueryDelay(val)
  }, [setQueryDelay])

  return (
    <Autocomplete
      disableClearable
      options={options}
      getOptionLabel={(option: string): string => option}
      multiple
      freeSolo
      fullWidth
      value={value}
      onChange={handleChange}
      onInputChange={handleTextChange}
      renderInput={(params): React.ReactNode => (
        <TextField
          {...params}
          label='Service names'
          variant='filled'
          size='small'
        />
      )}
    />
  )
}

type IInputProps = Omit<IProps, 'onChange' | 'value'> & { source?: string }

const ConnectedServicesInput: React.FC<IInputProps> = ({
  source = 'serviceNames', ...props
}) => {
  const { input } = useField<string[]>(source)

  return (
    <StringsArrayInput
      {...props}
      {...input}
    />
  )
}

export default ConnectedServicesInput
