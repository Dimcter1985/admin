import React from 'react'
import {
  Show,
  ReferenceField,
  TextField,
  ArrayField,
  ReferenceManyField,
  ShowProps,
  TabbedShowLayout,
  Tab,
  SingleFieldList,
  ChipField,
  BooleanField,
  Datagrid,
} from 'react-admin'
import DateField from 'components/DateField'
import TimeField from 'components/TimeField'
import FullNameField from 'components/FullNameField'
import DateTimeField from 'components/DateTimeField'
import { makeStyles } from '@material-ui/core/styles'
import ChangesTable from './components/ChangesTable'
import ShowSalonsField from '../components/ShowSalonsField'

const useStyles = makeStyles({
  root: {
    '& .MuiFormControl-root': {
      display: 'flex',
    },
  },
})

export const AppointmentShow = (props: ShowProps) => {
  const classes = useStyles()
  return (
    <Show {...props}>
      <TabbedShowLayout>
        <Tab label='Info'>
          <TextField source='id' label='Appt ID' />
          <DateField source='bookedAt' label='Book date' />
          <TimeField source='bookedAt' label='Book time' />
          <ShowSalonsField source='salon.name' />
          <TextField source='salon.id' label='Salon Id' />
          <ReferenceField
            source='customerId'
            reference='customers'
            label='Customer'
            link='show'
          >
            <FullNameField />
          </ReferenceField>
          <ArrayField source='salonServices' label='Services'>
            <SingleFieldList>
              <ChipField source='name' />
            </SingleFieldList>
          </ArrayField>
          <DateField source='startsAt' label='Book date' />
          <TimeField source='startsAt' label='Starts Time' />
          <TextField source='status' />
          <TextField source='cost' label='Sevice Cost' />
          <TextField source='tax' />
          <TextField source='serviceFee' label='Customer Fee' />
          <TextField source='tip' />
          <TextField source='grossAmount' label='Gross Amount' />
          <TextField source='discountAmount' label='Discount' />
          <TextField source='netAmount' label='Net Amount' />
          <TextField source='comission' label='Commission Rate' />
          <TextField source='snailzCut' label='Snailz Cut' />
          <TextField source='processingFee' label='Processing' />
          <TextField source='salonAmount' label='Salon Amount' />
          <TextField source='credits' label='Wallet' />
          <TextField source='discount.code' label='Discount Code' />
          <TextField source='referralCode' label='Refferal Code' />
          <TextField source='customerId' label='Custober Id' />
          <TextField source='deviceType' label='Device' />
          <TextField source='httpReferer' label='Http Refferer' />
          <TextField source='specialRequests' label='Special Requests' />
          <TextField source='totalAmount' label='Total Amount' />
          <BooleanField source='modifiedBeforeStart' label='Modified Before Start' />
          <BooleanField source='modifiedAfterStart' label='Modified After Start' />
        </Tab>
        <Tab label='History'>
          <ReferenceManyField
            reference='appointmentHistory'
            target='appointment'
            label=''
            className={classes.root}
          >
            <Datagrid>
              <DateTimeField source='createdAt' label='Date' />
              <ReferenceField source='userId' reference='customers' label='User Email'>
                <TextField source='email' />
              </ReferenceField>
              <TextField source='userType' label='Role' />
              <TextField source='action' />
              <TextField source='auditableType' label='Type' />
              <ChangesTable label='Audit' />
            </Datagrid>
          </ReferenceManyField>
        </Tab>
        <Tab label='Payment Transactions'>
          <ArrayField source='paymentTransactions' label='' className={classes.root}>
            <Datagrid>
              <DateTimeField source='createdAt' label='Created At' />
              <TextField source='transactionId' />
              <TextField source='type' />
              <TextField source='amount' />
              <TextField source='serviceFeeAmount' label='Service Fee Amount' />
              <TextField source='status' />
              <TextField source='errorMessage' label='Errror Message' />
            </Datagrid>
          </ArrayField>
        </Tab>
      </TabbedShowLayout>
    </Show>
  )
}

export default AppointmentShow
