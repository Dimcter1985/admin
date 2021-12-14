import React from 'react'
import { TopToolbar, CreateButton } from 'react-admin'

interface IProps {
  basePath?: string;
  data?: IGlobalHoliday;
}

const RewardsToolbar = ({ basePath, data }: IProps) => (
  <TopToolbar>
    <CreateButton
      basePath={basePath}
      record={data}
      label='New global holiday'
    />
  </TopToolbar>
)

export default RewardsToolbar
