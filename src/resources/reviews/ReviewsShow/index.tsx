import React from 'react'
import { TextField, ReferenceField, ShowProps, SimpleShowLayout } from 'react-admin'
import DateTimeField from 'components/DateTimeField'
import FullNameField from 'components/FullNameField'
import Show from 'components/Show'

export const ReviewsShow = (props: ShowProps) => (
  <Show {...props}>
    <SimpleShowLayout>
      <DateTimeField source='createdAt' label='Date Of Review:' />
      <TextField source='comment' label='Comment:' />
      <TextField source='averageRating' label='Average Rating:' />
      <TextField source='promptnessRating' label='Promptness Rating:' />
      <TextField source='cleanlinessRating' label='Cleanliness Rating:' />
      <TextField source='professionalismRating' label='Professionalism Rating:' />
      <TextField source='overallRating' label='Overall Rating:' />
      <ReferenceField label='Salon:' source='salonId' reference='salons'>
        <TextField source='name' />
      </ReferenceField>
      <ReferenceField label='Customer' source='id' reference='customers'>
        <FullNameField />
      </ReferenceField>
    </SimpleShowLayout>
  </Show>
)

export default ReviewsShow
