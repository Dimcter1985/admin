import React, { useState, useCallback } from 'react'
import { Button } from 'react-admin'
import changeCustomerCredits from 'api/changeCustomerCredits'
import useStyles from '../styles'
import CustomerBonusDialog from '../CustomerBonusDialog'

const ChangeCreditsButton = (record) => {
  const classes = useStyles()

  const [open, setOpenCredits] = useState(false)
  const [credits, setCredits] = useState(record?.credits.toFixed(2))

  const openCreditsDialog = useCallback((ev: React.SyntheticEvent) => {
    ev.stopPropagation()
    setOpenCredits(true)
  }, [setOpenCredits])

  const closeCreditsDialog = useCallback((ev: React.SyntheticEvent) => {
    ev.stopPropagation()
    setOpenCredits(false)
  }, [setOpenCredits])

  const handleChangeCredits = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setCredits(event.target.value)
  }, [setCredits])

  const changeCredits = useCallback(() => {
    changeCustomerCredits(
      record?.id,
      { credits: +credits },
    )
      .then(() => {
        window.location.reload()
      })
      .catch((error) => {
        alert(error.message)
      })
  }, [record, credits])

  return (
    <>
      <Button
        variant='outlined'
        color='primary'
        className={classes.root}
        onClick={openCreditsDialog}
        label='Credits'
        size='medium'
      />
      {
        open &&
          <CustomerBonusDialog
            open
            onClose={closeCreditsDialog}
            label='Credits'
            value={credits}
            onChange={handleChangeCredits}
            onSave={changeCredits}
          />
      }
    </>
  )
}

export default ChangeCreditsButton
