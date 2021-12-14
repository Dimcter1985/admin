import React from 'react'
import { TopToolbar, CreateButton, ExportButton } from 'react-admin'

const DiscountsToolbar: React.FC = () => (
  <TopToolbar>
    <CreateButton
      basePath='/discounts'
      label='New discount'
    />
    <ExportButton />
  </TopToolbar>
)

export default DiscountsToolbar
