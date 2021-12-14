import React from 'react'
import { PublicFieldProps, Record } from 'react-admin'

interface IProps {
  source: string;
  record?: Record;
}

const NumbersArrayField = ({ record, source }: IProps) => (
  record && record[source]
    ? record[source].map((item: string) => <span key={item}>{item}</span>)
    : null
)

export default NumbersArrayField as unknown as React.FC<PublicFieldProps>
