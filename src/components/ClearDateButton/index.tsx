import React from 'react'
import { useListContext, Button } from 'react-admin'

const ClearDateButton = () => {
  const { setFilters } = useListContext()
  const resetFilter = () => {
    setFilters({ createdAtGteq: '', createdAtLteq: '' }, [])
  }

  return (
    <Button
      variant='outlined'
      onClick={resetFilter}
      label='Clear'
    />
  )
}

export default ClearDateButton
