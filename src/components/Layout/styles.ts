import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  appFrame: {
    minHeight: '100vh',
  },
  contentWithSidebar: {
    '& > .MuiDrawer-root': {
      backgroundColor: '#152351',
    },
  },
  content: {
    paddingLeft: '15px',
  },
}))

export default useStyles
