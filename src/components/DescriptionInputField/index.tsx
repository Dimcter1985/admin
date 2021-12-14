import React from 'react'
import Typography from '@material-ui/core/Typography'

interface IProps {
  title: string;
  subtitle?: string;
}

const DesctiptionInputField: React.FC<IProps> = ({ title, subtitle, children }) => (
  <>
    <Typography variant='h6'>{ title }</Typography>
    { subtitle && <Typography variant='subtitle2'>{ subtitle }</Typography> }
    { children }
  </>
)

export default DesctiptionInputField
