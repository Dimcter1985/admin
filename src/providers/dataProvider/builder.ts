/* eslint-disable  @typescript-eslint/no-explicit-any */
import { DataProvider } from 'ra-core'
import { GetListParams } from 'react-admin'
import { DocumentNode } from 'graphql'
import client from 'api/utils/client'
import castError from 'api/utils/castError'
import pluralize from 'pluralize'
import omit from 'lodash/omit'

import {
  makeBatchDeletionQuery,
  makeBatchUpdationQuery,
  makeCreationQuery,
  makeDeletionQuery,
  makeGetListQuery,
  makeGetOneQuery,
  makeUpdationQuery,
} from './queryBuilders'

import { classify, toI, prepareSort, preparePagination, convertException } from './utils'

type Normalizer = (
  data: Record<string, any>,
  prevData?: Record<string, any>,
) => Record<string, any>

export interface IDataProviderBuilder {
  resource: string;
  query: {
    default: string;
    getList?: string;
    getOne?: string;
    getMany?: string;
    getManyReference?: string;
    update?: string;
    updateMany?: string;
    create?: string;
    delete?: string;
    deleteMany?: string;
  };
  normalizePayload?: Normalizer;
  normalizeFilters?: (filters: any) => any;
}

const runQuery = (query: DocumentNode, variables: Record<string, any>, options = {}) => (
  client.query({ query, variables, fetchPolicy: 'no-cache', ...options })
)

const runMutation = (mutation: DocumentNode, variables: Record<string, any>, options = {}) => (
  client.mutate({ mutation, variables, fetchPolicy: 'no-cache', ...options })
)

const defaultNormalizer: Normalizer = (data) => data

const defaultFiltersNormalizer = (data: any) => data

export type AppDataProvider = DataProvider

// TODO: Implement updateMany when server is ready
const createProvider = ({
  resource, query, normalizePayload, normalizeFilters = defaultFiltersNormalizer,
}: IDataProviderBuilder): AppDataProvider => {
  const getListQuery = makeGetListQuery(resource, query.getList || query.default)
  const getOneQuery = makeGetOneQuery(resource, query.getOne || query.default)
  const updationQuery = makeUpdationQuery(resource, query.update || query.default)
  const creationQuery = makeCreationQuery(resource, query.update || query.default)
  const deletionQuery = makeDeletionQuery(resource, query.delete || query.default)
  const batchDeletionQuery = makeBatchDeletionQuery(resource)
  const batchUpdationQuery = makeBatchUpdationQuery(resource, query.update || query.default)

  const normalize: Normalizer = normalizePayload || defaultNormalizer

  return {
    getList: (_resource, { sort, filter, pagination }: GetListParams) => {
      const variables = {
        pagination: preparePagination(pagination),
        sort: prepareSort(sort),
        filters: normalizeFilters(filter),
      }

      return runQuery(getListQuery, variables)
        .then((res) => res.data[resource])
    },
    getMany: (_resource, { ids }) => runQuery(getListQuery, { filters: { idIn: ids } })
      .then((res) => res.data[resource]),
    getManyReference: (_resource, { sort, filter, pagination, target, id }) => {
      const filters = filter || {}
      filters[`${target}IdEq`] = id
      const variables = {
        pagination: preparePagination(pagination),
        sort: prepareSort(sort),
        filters: normalizeFilters(filters),
      }

      return runQuery(getListQuery, variables)
        .then((res) => res.data[resource])
    },
    getOne: (_resource, { id }) => runQuery(getOneQuery, { id: toI(id) })
      .then((res) => res.data[pluralize.singular(resource)])
      .then((data) => ({ data })),
    update: (_resource, { id, data: payload, previousData }) => (
      runMutation(updationQuery, {
        id: toI(id),
        payload: normalize(omit(payload, ['id', 'createdAt', 'updatedAt']), previousData),
      })
        .then((res) => res.data[`update${classify(pluralize.singular(resource))}`])
        .then(castError)
        .then((data) => ({ data: data as any }))
        .catch(convertException)
    ),
    create: (_resource, { data: payload }) => runMutation(creationQuery, {
      payload: normalize(payload),
    })
      .then((res) => res.data[`create${classify(pluralize.singular(resource))}`])
      .then(castError)
      .then((data) => ({ data: data as any }))
      .catch(convertException),
    delete: (_resource, { id }) => runMutation(deletionQuery, { id: toI(id) })
      .then((res) => res.data[`delete${classify(pluralize.singular(resource))}`])
      .then(castError)
      .then((data) => ({ data: data as any })),
    deleteMany: (_resource, { ids }) => runMutation(batchDeletionQuery, { ids: ids.map(toI) })
      .then((res) => res.data[`delete${classify(resource)}`])
      .then(castError)
      .then(() => ({ data: ids })),
    updateMany: (_resource, { ids, data: payload }) => runMutation(batchUpdationQuery, {
      ids: ids.map(toI),
      payload,
    })
      .then((res) => res.data[`update${classify(resource)}`])
      .then(castError)
      .then(() => ({ data: ids }))
      .catch(convertException),
  }
}

export default createProvider

/* eslint-enable @typescript-eslint/no-explicit-any */
