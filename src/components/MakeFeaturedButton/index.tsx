import React from 'react'
import {
  Button,
  useUpdateMany,
  useRefresh,
  useNotify,
  useUnselectAll,
} from 'react-admin'
import StarIcon from '@material-ui/icons/Star'
import StarBorderIcon from '@material-ui/icons/StarBorder'

interface IProps {
  resource: string;
  selectedIds: number[];
  label: string;
  value: boolean;
}

const MakeFeaturedButton: React.FC<Partial<IProps>> = ({
  resource,
  value,
  label,
  selectedIds,
}) => {
  const refresh = useRefresh()
  const notify = useNotify()
  const unselectAll = useUnselectAll()

  const [makeFeatured, { loading }] = useUpdateMany(
    resource,
    selectedIds,
    { featured: value },
    {
      onSuccess: () => {
        refresh()
        notify('Updated')
        unselectAll(resource)
      },
      onFailure: (error: Error) => notify(error.message),
    },
  )

  return (
    <Button
      disabled={loading}
      label={label}
      onClick={makeFeatured}
    >
      { value ? <StarIcon /> : <StarBorderIcon /> }
    </Button>
  )
}

export default MakeFeaturedButton
