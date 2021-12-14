import React from 'react'
import {
  Button,
  useUpdate,
} from 'react-admin'

interface IProps {
  id: number;
  inProcessing: boolean;
}

const MarkProcessingButton: React.FC <Partial<IProps>> = ({ id, inProcessing }) => {
  const diff = {
    inProcessing: true,
  }

  const [update, { loading }] = useUpdate(
    'redemptions',
    id,
    diff,
  )

  return (
    !inProcessing
      ? <Button
          disabled={loading}
          label='Mark as in processing'
          onClick={update}
      />
      : null
  )
}

export default MarkProcessingButton
