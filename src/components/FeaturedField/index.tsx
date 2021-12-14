import React from 'react'
import { FieldProps, PublicFieldProps } from 'react-admin'
import { ListItemIcon } from '@material-ui/core'
import StarIcon from '@material-ui/icons/Star'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import { get } from 'lodash'

const FeaturedField = ({ record, source = 'featured' }: FieldProps) => {
  const value = get(record, source)
  return (
    <ListItemIcon>
      { value ? <StarIcon /> : <StarBorderIcon /> }
    </ListItemIcon>
  )
}

export default FeaturedField as unknown as PublicFieldProps
