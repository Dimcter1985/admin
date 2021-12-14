import React from 'react'
import { List } from 'components'
import { BooleanField, Datagrid, TextField, ReferenceField, ListProps } from 'react-admin'
import LinkImageField from 'components/LinkImageField'
import SearchFilter from 'components/SearchFilter'
import NeighborhoodsActionsField from './components/NeighborhoodsActionsField'
import NeighborhoodsToolbar from './components/NeighborhoodsToolbar'

const NeighborhoodsList = (props: ListProps) => (
  <List
    {...props}
    actions={<NeighborhoodsToolbar />}
    filters={<SearchFilter />}
    bulkActionButtons={false}
  >
    <Datagrid>
      <TextField source='name' />
      <ReferenceField label='Area' source='areaId' reference='areas'>
        <TextField source='name' />
      </ReferenceField>
      <BooleanField source='featured' />
      <BooleanField source='filterable' />
      <TextField source='position' />
      <TextField source='slug' />
      <LinkImageField source='image.url' label='Image' />
      <NeighborhoodsActionsField label='Actions' />
    </Datagrid>
  </List>
)

export default NeighborhoodsList
