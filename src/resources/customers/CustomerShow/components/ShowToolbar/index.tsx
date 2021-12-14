import React from 'react'
import { EditButton, TopToolbar } from 'react-admin'
import ViewLink from 'components/ViewLink'

interface IProps {
  basePath?: string;
  data?: ICustomer;
}

const ShowToolbar = ({ basePath, data }: IProps) => (
  <TopToolbar>
    <EditButton
      basePath={basePath}
      record={data}
      label={`Edit ${data?.firstName} ${data?.lastName}`}
    />
    <ViewLink source='' label='Impersonate' />
  </TopToolbar>
)

export default ShowToolbar
