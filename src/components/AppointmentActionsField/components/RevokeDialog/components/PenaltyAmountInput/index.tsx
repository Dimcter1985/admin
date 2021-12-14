import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import Divider from '@material-ui/core/Divider'
import InputLabel from '@material-ui/core/InputLabel'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl'

interface IProps {
  onClick: () => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    boxShadow: 'none',
    borderBottom: '1px solid rgba(0, 0, 0, 0.42)',
    borderRadius: 0,
    marginTop: '15px',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    '&:hover': {
      appearance: 'none',
    },
  },
  button: {
    padding: 10,
    borderRadius: 0,
    boxShadow: 'none',
  },
  divider: {
    height: 28,
    marginLeft: 10,
  },
  typography: {
    marginLeft: 10,
  },
}))

const PenaltyAmountInput: React.FC<IProps> = ({ onClick, onChange, value }) => {
  const classes = useStyles()

  return (
    <FormControl fullWidth>
      <InputLabel>Penatly Amount</InputLabel>
      <Paper component='form' className={classes.root}>
        <Typography className={classes.typography}>$</Typography>
        <Divider className={classes.divider} orientation='vertical' />
        <InputBase
          type='number'
          className={classes.input}
          value={value}
          onChange={onChange}
          inputProps={{
            min: 0.00,
            step: 0.01,
          }}
        />
        <Button
          variant='contained'
          className={classes.button}
          aria-label='directions'
          onClick={onClick}
        >
          No Penalty
        </Button>
      </Paper>
    </FormControl>

  )
}
export default PenaltyAmountInput
