import React, { useState, useCallback } from 'react'
import { Button } from 'react-admin'
import changeCustomerPoints from 'api/changeCustomerPoints'
import useStyles from '../styles'
import CustomerBonusDialog from '../CustomerBonusDialog'

const ChangePointsButton = (record) => {
  const classes = useStyles()

  const [open, setOpenPoints] = useState(false)
  const [points, setPoints] = useState(record?.points.toFixed(2))

  const openPointsDialog = useCallback((ev: React.SyntheticEvent) => {
    ev.stopPropagation()
    setOpenPoints(true)
  }, [setOpenPoints])

  const closePointsDialog = useCallback((ev: React.SyntheticEvent) => {
    ev.stopPropagation()
    setOpenPoints(false)
  }, [setOpenPoints])

  const handleChangePoints = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setPoints(event.target.value)
  }, [setPoints])

  const changePoints = useCallback(() => {
    changeCustomerPoints(
      record?.id,
      { points: +points },
    )
      .then(() => {
        window.location.reload()
      })
      .catch((error) => {
        alert(error.message)
      })
  }, [record, points])

  return (
    <>
      <Button
        variant='outlined'
        color='primary'
        className={classes.root}
        onClick={openPointsDialog}
        label='Points'
        size='medium'
      />
      {
        open &&
          <CustomerBonusDialog
            open
            onClose={closePointsDialog}
            label='Points'
            value={points}
            onChange={handleChangePoints}
            onSave={changePoints}
          />
      }
    </>
  )
}

export default ChangePointsButton
