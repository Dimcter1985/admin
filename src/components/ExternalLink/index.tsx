import React from 'react'

interface IProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

const ExternalLink: React.FC<IProps> = ({
  href,
  className,
  children,
}) => (
  <a className={className} href={href} target='_blank' rel='noopener noreferrer'>
    {children}
  </a>
)

export default ExternalLink
