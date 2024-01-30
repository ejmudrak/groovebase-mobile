import { Service } from 'utils/services';
import { findInfiniteQuery } from 'utils/react-query';
import { Bin, QueryParams } from 'types';

/*
Endpoint: /bins
Methods: fetch
*/

export const useBinsInfiniteQuery = (params?: QueryParams<Bin>) =>
  findInfiniteQuery<Bin>(Service.Bins, {
    ...params,
  });
