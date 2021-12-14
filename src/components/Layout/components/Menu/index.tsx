import React from 'react'
import { Menu as RAMenu, MenuItemLink, MenuProps } from 'react-admin'
import { ReduxState } from 'ra-core'
import Divider from '@material-ui/core/Divider'

import { useSelector } from 'react-redux'
import { ReactComponent as ComicsIcon } from './icons/comics.svg'
import { ReactComponent as VenuesIcon } from './icons/venues.svg'
import { ReactComponent as EventsIcon } from './icons/events.svg'
import { ReactComponent as UsersIcon } from './icons/users.svg'
import { ReactComponent as TagsIcon } from './icons/tags.svg'
import { ReactComponent as StylesIcon } from './icons/styles.svg'
import { ReactComponent as NeighborhoodsIcon } from './icons/neighborhoods.svg'
import { ReactComponent as BoroughsIcon } from './icons/boroughs.svg'

import useStyles from './styles'

type Props = React.ComponentProps<typeof RAMenu>

const Menu: React.FC<MenuProps> = ({
  dense,
  onMenuClick,
}: Props) => {
  const classes = useStyles()
  const open = useSelector((state: ReduxState) => state.admin.ui.sidebarOpen)

  const linkClasses = { root: classes.link, active: classes.activeLink }

  useSelector((state: ReduxState) => state.router.location.pathname)

  return (
    <div className={classes.main}>
      <MenuItemLink
        classes={linkClasses}
        to='/comedians'
        primaryText='Comics'
        leftIcon={<ComicsIcon />}
        onClick={onMenuClick}
        dense={dense}
        sidebarIsOpen={open}
      />
      <MenuItemLink
        classes={linkClasses}
        to='/venues'
        primaryText='Venues'
        leftIcon={<VenuesIcon />}
        onClick={onMenuClick}
        dense={dense}
        sidebarIsOpen={open}
      />
      <MenuItemLink
        classes={linkClasses}
        to='/events'
        primaryText='Events'
        leftIcon={<EventsIcon />}
        onClick={onMenuClick}
        dense={dense}
        sidebarIsOpen={open}
      />
      <MenuItemLink
        classes={linkClasses}
        to='/podcasts'
        primaryText='Podcasts'
        leftIcon={<ComicsIcon />}
        onClick={onMenuClick}
        dense={dense}
        sidebarIsOpen={open}
      />
      <MenuItemLink
        classes={linkClasses}
        to='/users'
        primaryText='Users'
        leftIcon={<UsersIcon />}
        onClick={onMenuClick}
        dense={dense}
        sidebarIsOpen={open}
      />
      <Divider className={classes.devider} />
      <MenuItemLink
        classes={linkClasses}
        to='/tags'
        primaryText='Tags'
        leftIcon={<TagsIcon />}
        onClick={onMenuClick}
        dense={dense}
        sidebarIsOpen={open}
      />
      <MenuItemLink
        classes={linkClasses}
        to='/styles'
        primaryText='Styles'
        leftIcon={<StylesIcon />}
        onClick={onMenuClick}
        dense={dense}
        sidebarIsOpen={open}
      />
      <MenuItemLink
        classes={linkClasses}
        to='/cities'
        primaryText='Cities'
        leftIcon={<BoroughsIcon />}
        onClick={onMenuClick}
        dense={dense}
        sidebarIsOpen={open}
      />
      <MenuItemLink
        classes={linkClasses}
        to='/neighborhoods'
        primaryText='Neighborhoods'
        leftIcon={<NeighborhoodsIcon />}
        onClick={onMenuClick}
        dense={dense}
        sidebarIsOpen={open}
      />
      <MenuItemLink
        classes={linkClasses}
        to='/boroughs'
        primaryText='Boroughs'
        leftIcon={<BoroughsIcon />}
        onClick={onMenuClick}
        dense={dense}
        sidebarIsOpen={open}
      />
    </div>
  )
}

export default Menu
