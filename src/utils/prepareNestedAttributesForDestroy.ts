import differenceBy from 'lodash/differenceBy'
import { Record } from 'react-admin'

function prepareNestedAttributesForDestroy(
  initialRecords: Record[] | null,
  records: Record[],
): Record[] {
  if (initialRecords === null) {
    return records
  }

  const recordsToDestroy = differenceBy(initialRecords, records.filter((r) => r.id), 'id')

  return [
    ...records,
    ...recordsToDestroy.map((r) => ({ id: r.id, _destroy: true })),
  ]
}

export default prepareNestedAttributesForDestroy
