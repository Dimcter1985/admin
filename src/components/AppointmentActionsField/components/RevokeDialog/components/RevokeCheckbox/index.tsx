import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'

interface IProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
}

const RevokeCheckbox: React.FC<IProps> = ({
  onChange,
  checked,
}) => (
  <Checkbox
    color='primary'
    checked={checked}
    onChange={onChange}
  />
)
export default RevokeCheckbox
