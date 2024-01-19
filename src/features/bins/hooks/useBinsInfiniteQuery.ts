import { Service } from '@src/utils/services';
import { findInfiniteQuery } from '@src/utils/react-query';
import { Bin, QueryParams } from '@src/types';

/*
Endpoint: /bins
Methods: fetch
*/

export const useBinsInfiniteQuery = (params?: QueryParams<Bin>) =>
  findInfiniteQuery<Bin>(Service.Bins, {
    ...params,
  });
