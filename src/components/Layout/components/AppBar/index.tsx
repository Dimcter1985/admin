import React, { useMemo } from 'react'
import { AppBar, AppBarProps } from 'react-admin'
import { ReduxState } from 'ra-core'
import { useSelector } from 'react-redux'
import { ReactComponent as Logo } from './assets/Logo.svg'
import useStyles from './styles'

const comicsImg = require('./neons/COMICS.png')
const podcastsImg = require('./neons/PODCASTS.png')
const venuesImg = require('./neons/VENUES.png')
const showsImg = require('./neons/SHOWS.png')
const usersImg = require('./neons/USERS.png')
const tagsImg = require('./neons/TAGS.png')
const stylesImg = require('./neons/STYLES.png')
const neighborhoodsImg = require('./neons/NEIGHBORHOODS.png')
const boroughsImg = require('./neons/BOROUGHS.png')

const getTitleImageByPath = (path: string): string | null => {
  switch (path) {
    case '/comedians': return comicsImg
    case '/podcasts': return podcastsImg
    case '/venues': return venuesImg
    case '/events': return showsImg
    case '/users': return usersImg
    case '/tags': return tagsImg
    case '/styles': return stylesImg
    case '/neighborhoods': return neighborhoodsImg
    case '/boroughs': return boroughsImg
    default: return null
  }
}

const MyAppBar = (props: AppBarProps) => {
  const classes = useStyles()
  const route = useSelector((state: ReduxState) => state.router.location.pathname)

  const titleImage = useMemo(() => (
    getTitleImageByPath(route)
  ), [route])

  return (
    <AppBar {...props} className={classes.root}>
      <Logo />
      { titleImage && (
        <img className={classes.neon} src={titleImage} alt='Neon' />
      )}
      <span className={classes.spacer} />
    </AppBar>
  )
}

export default MyAppBar
