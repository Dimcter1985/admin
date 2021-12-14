import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import { makeStyles } from '@material-ui/core/styles'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Slide from '@material-ui/core/Slide'
import { TransitionProps } from '@material-ui/core/transitions'
import TextField from '@material-ui/core/TextField'

interface IProps {
  open: boolean;
  onClose: (ev: React.SyntheticEvent) => void;
  onSave: (ev: React.SyntheticEvent) => void;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    right: 0,
    zIndex: 10,
  },
})

const Transition = React.forwardRef((
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>,
) => <Slide direction='left' ref={ref} {...props} />)

const CustomerBonusDialog: React.FC<IProps> = ({
  open,
  onClose,
  onSave,
  onChange,
  value,
  label,
}: IProps) => {
  const classes = useStyles()

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={onClose}
      onClick={(ev: React.SyntheticEvent) => (ev.stopPropagation())}
      aria-labelledby='alert-dialog-slide-title'
      aria-describedby='alert-dialog-slide-description'
      fullWidth
    >
      <DialogTitle />
      <IconButton onClick={onClose} className={classes.root}>
        <CloseIcon />
      </IconButton>
      <DialogContent>
        <TextField
          type='number'
          label={label}
          fullWidth
          value={value}
          onChange={onChange}
          inputProps={{
            min: 0.00,
            step: 0.01,
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button color='primary' onClick={onSave}>
          Save Changes
        </Button>
        <Button onClick={onClose} color='primary'>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default CustomerBonusDialog
