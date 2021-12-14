import React from 'react'
import Chip from '@material-ui/core/Chip'
import { PublicFieldProps, Record } from 'react-admin'

interface IProps {
  source: string;
  record?: Record;
}

const StringsArrayField = ({ record, source }: IProps) => (
  record && record[source]
    ? record[source].map((item: string) => <Chip label={item} key={item} />)
    : null
)

export default StringsArrayField as unknown as React.FC<PublicFieldProps>
