import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import RevokeDialog from '../RevokeDialog'

const ShowDialogButton = (record) => {
  const [open, setOpen] = useState(false)

  const handleClickOpen = (ev: React.SyntheticEvent) => {
    ev.stopPropagation()
    setOpen(true)
  }

  const handleClickClose = (ev: React.SyntheticEvent) => {
    ev.stopPropagation()
    setOpen(false)
  }

  return (
    <>
      <Button
        variant='outlined'
        color='primary'
        onClick={handleClickOpen}
      >
        Void/Refound
      </Button>
      {
        open &&
        <RevokeDialog
          {...record}
          open
          onClose={handleClickClose}
        />
      }
    </>
  )
}

export default ShowDialogButton
