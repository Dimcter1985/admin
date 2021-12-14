const sanitizeToolbarProps = ({
  basePath,
  currentSort,
  defaultTitle,
  displayedFilters,
  hasCreate,
  hideFilter,
  loading,
  loaded,
  onToggleItem,
  onUnselectItems,
  perPage,
  selectedIds,
  setFilters,
  setPage,
  setPerPage,
  setSort,
  showFilter,
  filterValues,
  permanentFilter,
  ...props
}: any) => props // eslint-disable-line

export default sanitizeToolbarProps
