import React from 'react'
import { TopToolbar, CreateButton } from 'react-admin'

const NeighborhoodsToolbar: React.FC = () => (
  <TopToolbar>
    <CreateButton
      basePath='/neighborhoods'
      label='New neighborhood'
    />
  </TopToolbar>
)

export default NeighborhoodsToolbar
