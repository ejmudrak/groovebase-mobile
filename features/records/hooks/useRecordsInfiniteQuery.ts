import { Service } from 'utils/services';
import { findInfiniteQuery } from 'utils/react-query';
import { QueryParams, Record } from 'types';

/*
Endpoint: /records
Methods: fetch
*/

export const useRecordsInfiniteQuery = (params?: QueryParams<Record>) =>
  findInfiniteQuery<Record>(Service.Records, {
    ...params,
  });
