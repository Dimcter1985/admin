import React from 'react'
import { Show as ReactAdminShow } from 'react-admin'

import ShowToolbar from './components/ShowToolbar'

type IProps = React.ComponentProps<typeof ReactAdminShow>

const Show: React.FC<IProps> = ({
  title,
  children,
  actions = <ShowToolbar />,
  ...props
}) => (
  <ReactAdminShow
    title={title}
    actions={actions}
    {...props}
  >
    {children}
  </ReactAdminShow>
)

export default Show
