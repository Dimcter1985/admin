import React from 'react'
import { Show, SimpleShowLayout, TextField, ShowProps, ReferenceField } from 'react-admin'

const LoyaltyCardsShow = (props: ShowProps) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source='id' label='Id' />
      <ReferenceField
        source='loyaltyProgram.salonId'
        reference='salons'
        label='Salon'
      >
        <TextField source='name' />
      </ReferenceField>
      <TextField source='score' />
      <TextField source='visits' />
    </SimpleShowLayout>
  </Show>
)

export default LoyaltyCardsShow
