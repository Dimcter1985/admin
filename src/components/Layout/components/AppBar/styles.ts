import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    backgroundColor: '#0D1539',
    '& .MuiToolbar-root > .MuiIconButton-root:first-child': {
      color: '#8144FE',
    },
  },
  title: {
    flex: 1,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  spacer: {
    flex: 1,
  },
  neon: {
    maxHeight: '50px',
    marginLeft: '30px',
  },
})

export default useStyles
