import { Service } from '@src/utils/services';
import { findInfiniteQuery } from '@src/utils/react-query';
import { QueryParams, Record } from '@src/types';

/*
Endpoint: /records
Methods: fetch
*/

export const useRecordsInfiniteQuery = (params?: QueryParams<Record>) =>
  findInfiniteQuery<Record>(Service.Records, {
    ...params,
  });
