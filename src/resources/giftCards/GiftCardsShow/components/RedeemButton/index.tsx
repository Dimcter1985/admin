import React from 'react'
import {
  Button,
  useUpdate,
} from 'react-admin'
import date from 'utils/date'

interface IProps {
  id: number;
}

const MakeFeaturedButton: React.FC <Partial<IProps>> = ({ id }) => {
  const diff = {
    redeemed: true,
    redeemedAt: date(),
  }

  const [update, { loading }] = useUpdate(
    'giftCards',
    id,
    diff,
  )

  return (
    <Button
      disabled={loading}
      label='Redeemed'
      onClick={update}
    />
  )
}

export default MakeFeaturedButton
