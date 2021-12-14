import React from 'react'
import {
  Show,
  ShowProps,
  TextField,
  BooleanField,
  TabbedShowLayout,
  Tab,
  Datagrid,
  ArrayField,
  SingleFieldList,
  ChipField,
  ReferenceField,
  ReferenceManyField,
  Pagination,
} from 'react-admin'
import DateField from 'components/DateField'
import TimeField from 'components/TimeField'
import FullNameField from 'components/FullNameField'
import PhoneField from 'components/PhoneField'
import AppointmentActionsField from 'components/AppointmentActionsField'
import { makeStyles } from '@material-ui/core/styles'
import ShowToolbar from './components/ShowToolbar'
import LoyaltyCardLinksField from './components/LoyaltyCardLinksField'
import InfoTable from './components/InfoTable'

const useStyles = makeStyles({
  root: {
    '& .MuiFormControl-root': {
      display: 'flex',
    },
  },
})

export const CustomerShow = (props: ShowProps) => {
  const classes = useStyles()

  return (
    <Show {...props} actions={<ShowToolbar />}>
      <TabbedShowLayout>
        <Tab label='Info'>
          <InfoTable />
        </Tab>
        <Tab label='Appointments'>
          <ReferenceManyField
            reference='appointments'
            label=''
            target='customer'
            pagination={<Pagination />}
            className={classes.root}
          >
            <Datagrid>
              <AppointmentActionsField label='Actions' />
              <TextField source='id' label='Appt Id' />
              <DateField source='bookedAt' label='Book Date' />
              <TimeField source='bookedAt' label='Book Time' />
              <ReferenceField
                source='salonId'
                reference='salons'
                label='Salon'
                link='show'
              >
                <TextField source='name' />
              </ReferenceField>
              <PhoneField source='salon.phone' label='Salon Phone' sortable={false} />
              <ReferenceField
                source='customerId'
                reference='customers'
                label='Customer'
                link='show'
              >
                <FullNameField />
              </ReferenceField>
              <ArrayField source='salonServices' label='Services' sortable={false}>
                <SingleFieldList>
                  <ChipField source='name' />
                </SingleFieldList>
              </ArrayField>
              <DateField source='startsAt' label='Appt Date' />
              <TimeField source='startsAt' label='Starts Time' />
              <TextField source='status' />
              <TextField source='cost' label='Sevice Cost' />
              <TextField source='tax' />
              <TextField source='serviceFee' label='Customer Fee' />
              <TextField source='tip' />
              <TextField source='grossAmount' label='Gross Amount' sortable={false} />
              <TextField source='credits' label='Wallet' />
              <TextField source='netAmount' label='Net Amount' sortable={false} />
              <TextField source='comission' />
              <TextField source='snailzCut' label='Snailz Cut' sortable={false} />
              <TextField source='processingFee' label='Processing' />
              <TextField source='salonAmount' label='Salon Amount' />
              <TextField source='deviceType' label='Device' />
              <TextField source='httpReferer' label='Http Refferer' />
              <BooleanField source='modifiedBeforeStart' label='Modified Before Start' />
              <BooleanField source='modifiedAfterStart' label='Modified After Start' />
            </Datagrid>
          </ReferenceManyField>
        </Tab>
        <Tab label='Loyalty Card'>
          <ReferenceManyField
            reference='loyaltyCards'
            target='customer'
            label=''
            pagination={<Pagination />}
            className={classes.root}
          >
            <Datagrid>
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
              <LoyaltyCardLinksField label='Actions' />
            </Datagrid>
          </ReferenceManyField>
        </Tab>
      </TabbedShowLayout>
    </Show>
  )
}

export default CustomerShow
