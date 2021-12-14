import React from 'react'

import Grid, { GridProps } from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  item: {
    paddingLeft: 8,
    paddingRight: 8,
  },
})

const FormGridContainer: React.FC<GridProps> = ({
  className, container, ...props
}) => (
  <Grid container {...props} />
)

const FormGridItem: React.FC<GridProps> = ({ className, item, xs = 12, md = 6, ...props }) => {
  const classes = useStyles()
  return (
    <Grid className={classes.item} item xs={xs} md={md} {...props} />
  )
}

const FormGrid: React.FC<GridProps> & {
  Container: typeof FormGridContainer;
  Item: typeof FormGridItem;
} = ({ className, ...props }) => (
  <Grid {...props} />
)

FormGrid.Container = FormGridContainer
FormGrid.Item = FormGridItem

export default FormGrid
