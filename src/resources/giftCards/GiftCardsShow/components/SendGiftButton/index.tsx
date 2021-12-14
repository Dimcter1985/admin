import React from 'react'
import {
  Button,
  useUpdate,
} from 'react-admin'
import date from 'utils/date'

interface IProps {
  id: number;
}

const SendGiftButton: React.FC <Partial<IProps>> = ({ id }) => {
  const diff = {
    sent: true,
    sendDate: date(),
  }

  const [update, { loading }] = useUpdate(
    'giftCards',
    id,
    diff,
  )

  return (
    <Button
      disabled={loading}
      label='Send Gift Card'
      onClick={update}
    />
  )
}

export default SendGiftButton
