import React from 'react'
import { Button } from 'react-admin'
import { Link } from 'react-router-dom'

interface IProps {
  pathname: string;
  label: string;
  children: React.ReactElement;
}

const ButtonLink: React.FC<IProps> = ({
  pathname,
  children,
  ...props
}: IProps) => (
  <Button
    {...props}
    component={Link}
    to={{ pathname }}

  >
    {children}
  </Button>
)

export default ButtonLink
