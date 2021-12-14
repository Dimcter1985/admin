import React from 'react'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'

interface IProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  label: string;
  options: {
    id: number;
    name: string;
  }[];
}

const RevokeSelectInput: React.FC<IProps> = ({
  onChange,
  value,
  label,
  options,
}) => (
  <TextField
    id='standard-select-currency'
    margin='dense'
    select
    label={label}
    fullWidth
    value={value}
    onChange={onChange}
  >
    {options.map((item) => (
      <MenuItem key={item.id} value={item.name}>
        {item.name}
      </MenuItem>
    ))}
  </TextField>
)
export default RevokeSelectInput
