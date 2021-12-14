import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginTop: '0.5em',
    [theme.breakpoints.only('xs')]: {
      marginTop: 0,
    },
    [theme.breakpoints.up('md')]: {
      marginTop: '1.5em',
    },
  },
  link: {
    color: '#fff',
    marginTop: '6px',
    marginBottom: '6px',
  },
  activeLink: {
    color: '#459BFD',
    '& .icon': {
      fill: '#459BFD',
      stroke: '#459BFD',
    },
  },
  devider: {
    color: '#459BFD',
    backgroundColor: '#459BFD',
    margin: '16px 0',
  },
}))

export default useStyles
