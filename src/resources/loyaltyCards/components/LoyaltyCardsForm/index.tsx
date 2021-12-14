import React from 'react'
import { SimpleFormProps, NumberInput } from 'react-admin'
import pick from 'lodash/pick'
import GridForm from 'components/GridForm'

const extractInitialValues = (record: ILoyaltyCard) => ({
  ...(pick(record, ['id', 'score'])),
})

const LoyaltyCardsForm = (props: SimpleFormProps) => (
  <GridForm
    {...props}
    record={extractInitialValues(props.record)}
  >
    <NumberInput source='score' fullWidth />
  </GridForm>
)

export default LoyaltyCardsForm as unknown as React.FC
