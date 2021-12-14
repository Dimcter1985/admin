import React from 'react'
import {
  Button,
  useUpdate,
} from 'react-admin'

interface IProps {
  id: number;
  active: boolean;
}

const ToggleActiveButton: React.FC <Partial<IProps>> = ({ id, active }) => {
  const diff = {
    active: !active,
  }

  const [update] = useUpdate(
    'globalHolidays',
    id,
    diff,
  )

  return (
    <Button
      label={active ? 'Enable' : 'Disable'}
      onClick={update}
      color={active ? 'primary' : 'secondary'}
    />
  )
}

export default ToggleActiveButton
