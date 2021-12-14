import React from 'react'
import { TopToolbar } from 'react-admin'
import MarkProcessingButton from '../MarkProcessingButton'

interface IProps {
  data?: IRedemption;
}

const RedemptionsToolbar = ({ data }: IProps) => (
  <TopToolbar>
    <MarkProcessingButton {...data} />
  </TopToolbar>
)

export default RedemptionsToolbar
