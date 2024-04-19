import { Service } from 'utils/services';
import { findInfiniteQuery } from 'utils/react-query';
import { QueryParams, VinylRecord } from 'types';

/*
Endpoint: /records
Methods: fetch
*/

export const useRecordsInfiniteQuery = (params?: QueryParams<VinylRecord>) =>
  findInfiniteQuery<VinylRecord>(Service.Records, {
    ...params,
  });
