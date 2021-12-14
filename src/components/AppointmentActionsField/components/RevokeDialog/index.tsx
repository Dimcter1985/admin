import React, { useState, useCallback } from 'react'
import { useRefresh, useQuery } from 'react-admin'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { makeStyles } from '@material-ui/core/styles'

import revokeAppointment from 'api/revokeAppointment'
import PenaltyAmountInput from './components/PenaltyAmountInput'
import TransactionsTable from './components/TransactionsTable'
import RevokeSelectInput from './components/RevokeSelectInput'
import RevokeCheckbox from './components/RevokeCheckbox'

import { reasons, statuses } from './consts'

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    right: 0,
  },
})

const PERSENT = 1

interface IProps {
  open: boolean;
  onClose: (ev: React.SyntheticEvent) => void;
  salon: ISalon;
  cost: number;
  id: number;
}

const RevokeDialog: React.FC<IProps> = ({
  open,
  onClose,
  salon,
  cost,
  id,
  ...record
}) => {
  const classes = useStyles()

  const { data } = useQuery({
    type: 'getOne',
    resource: 'appointments',
    payload: { id },
  })

  const paymentTransactions = data ? data.paymentTransactions : []

  const { settings } = salon

  const refresh = useRefresh()

  const [reason, setReason] = useState('canceled')
  const [reasonText, setReasonText] = useState('')
  const [status, setStatus] = useState('canceled')
  const [penalty, setPenalty] = useState(settings.cancelationFee.toFixed(2))
  const [wallet, setWallet] = useState(true)
  const [points, setPoints] = useState(true)
  const [transactionIds, setTransaction] = useState<number[]>([])

  const setFee = useCallback((targetStatus: string) => {
    if (!cost || !settings) {
      return
    }

    let floatPenalty = 0

    if (targetStatus === 'canceled') {
      floatPenalty = settings.cancelationFeeType === PERSENT
        ? (cost * settings.cancelationFee) / 100
        : settings.cancelationFee
    }
    if (targetStatus === 'no_show') {
      floatPenalty = settings.noShowFeeType === PERSENT
        ? (cost * settings.noShowFee) / 100
        : settings.noShowFee
    }
    setPenalty(floatPenalty.toFixed(2))
  }, [cost, settings, setPenalty])

  const toggleTransaction = useCallback(() => {
    setTransaction(
      transactionIds.includes(id)
        ? transactionIds.filter((sId) => sId !== id)
        : [...transactionIds, id],
    )
  }, [id, transactionIds])

  const toggleAll = useCallback(() => {
    setTransaction(
      transactionIds.length > paymentTransactions.length / 2
        ? []
        : paymentTransactions.map((t) => t.id),
    )
  }, [transactionIds, paymentTransactions])

  const handleChangeReason = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setReason(event.target.value)
    if (event.target.value === 'canceled') { setStatus('canceled') }
    if (event.target.value === 'no_show') { setStatus('no_show') }
    setFee(event.target.value)
  }, [setReason, setFee])

  const handleChangeReasonText = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setReasonText(event.target.value)
  }, [setReasonText])

  const handleChangeStatus = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.value)
    setFee(event.target.value)
  }, [setStatus, setFee])

  const handleChangPenalty = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setPenalty(event.target.value)
  }, [setPenalty])

  const handleClearPenalty = () => { setPenalty('0.00') }

  const handleChangeWallet = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setWallet(event.target.checked)
  }, [setWallet])

  const handleChangePoints = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setPoints(event.target.checked)
  }, [setPoints])

  const revoke = useCallback(() => {
    revokeAppointment(
      id,
      {
        status,
        penaltyFee: +penalty || 0,
        revokeReason: reason === 'other' ? reasonText : reason,
      },
    )
      .then(() => { refresh() })
      .catch((error) => alert(error.message))
  }, [
    id,
    status,
    penalty,
    reason,
    reasonText,
    refresh,
  ])

  return (
    <Dialog
      open={open}
      onClose={onClose}
      onClick={(ev: React.SyntheticEvent) => (ev.stopPropagation())}
      aria-labelledby='form-dialog-title'
      fullWidth
    >
      <IconButton onClick={onClose} className={classes.root}>
        <CloseIcon />
      </IconButton>
      <DialogTitle id='form-dialog-title'>
        Void/Refound
      </DialogTitle>
      <DialogContent>
        <RevokeSelectInput
          label='Reason'
          value={reason}
          onChange={handleChangeReason}
          options={reasons}
        />
        {
          (reason === 'other')
            ? (
              <TextField
                label='Reason Text'
                fullWidth
                value={reasonText}
                onChange={handleChangeReasonText}
              />
            )
            : null
        }
        { !!record && !!paymentTransactions.length && (
          <TransactionsTable
            onTransactionToggle={toggleTransaction}
            selectedIds={transactionIds}
            onAllToggle={toggleAll}
            transactions={paymentTransactions}
          />
        )}
        <RevokeSelectInput
          label='Status'
          value={status}
          onChange={handleChangeStatus}
          options={statuses}
        />
        <PenaltyAmountInput
          onClick={handleClearPenalty}
          onChange={handleChangPenalty}
          value={penalty}
        />
        <FormControlLabel
          value='Return wallets'
          control={
            <RevokeCheckbox
              checked={wallet}
              onChange={handleChangeWallet}
            />
          }
          label='Return wallets'
          labelPlacement='start'
        />
        <FormControlLabel
          value='Cancel points'
          control={
            <RevokeCheckbox
              checked={points}
              onChange={handleChangePoints}
            />
          }
          label='Cancel points'
          labelPlacement='start'
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color='primary'>
          Cancel
        </Button>
        <Button
          onClick={revoke}
          color='primary'
        >
          Apply Changes
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default RevokeDialog
