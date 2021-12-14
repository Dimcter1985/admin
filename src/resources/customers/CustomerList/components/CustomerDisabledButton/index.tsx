import React from 'react'
import ViewLink from 'components/ViewLink'
import {
  Button,
  useUpdate,
} from 'react-admin'

interface IProps {
  id: number;
  disabled: boolean;
}

const ToggleActiveButton: React.FC <Partial<IProps>> = ({ id, disabled }) => {
  const diff = {
    disabled: true,
  }

  const [update] = useUpdate()

  const handleClick = (ev: React.SyntheticEvent) => {
    ev.stopPropagation()
    update(
      'customers',
      id,
      diff,
    )
  }

  return (
    (!disabled) ? (
      <>
        <ViewLink
          source=''
          label='Impersonate'
          onClick={(ev: React.SyntheticEvent) => (ev.stopPropagation())}
        />
        <Button label='Disable' onClick={handleClick} />
      </>
    ) : (null)
  )
}

export default ToggleActiveButton
