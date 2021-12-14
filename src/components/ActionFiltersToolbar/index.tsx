import React from 'react'
import { ExportButton, TopToolbar, Filter, DateTimeInput } from 'react-admin'
import { makeStyles } from '@material-ui/core/styles'
import ClearDateButton from 'components/ClearDateButton'

const useStyles = makeStyles({
  root: {
    alignItems: 'center',
  },
})
const ActionFiltersToolbar = () => {
  const classes = useStyles()
  return (
    <TopToolbar className={classes.root}>
      <Filter>
        <DateTimeInput label='At' source='createdAtGteq' alwaysOn />
        <DateTimeInput label='To' source='createdAtLteq' alwaysOn />
      </Filter>
      <ClearDateButton />
      <ExportButton />
    </TopToolbar>
  )
}

export default ActionFiltersToolbar
