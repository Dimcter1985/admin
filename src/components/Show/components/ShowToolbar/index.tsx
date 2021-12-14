import React from 'react'
import { EditButton, DeleteButton, TopToolbar } from 'react-admin'

interface IProps {
  basePath?: string;
  data?: IReview;
  resource?: string;
}

const ShowToolbar = ({ basePath, data, resource }: IProps) => (
  <TopToolbar>
    <EditButton basePath={basePath} record={data} />
    <DeleteButton basePath={basePath} record={data} resource={resource} />
  </TopToolbar>
)

export default ShowToolbar
