import React from 'react'
import { TopToolbar, CreateButton } from 'react-admin'

interface IProps {
  basePath?: string;
  data?: IReward;
}

const RewardsToolbar = ({ basePath, data }: IProps) => (
  <TopToolbar>
    <CreateButton
      basePath={basePath}
      record={data}
      label='New reward'
    />
  </TopToolbar>
)

export default RewardsToolbar
