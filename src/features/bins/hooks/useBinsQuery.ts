import { Service } from '@src/utils/services';
import { findQuery } from '@src/utils/react-query';
import { Bin, QueryParams } from '@src/types';

/*
Endpoint: /bins
Methods: fetch
*/

export const useBinsQuery = (params?: QueryParams<Bin>) =>
  findQuery<Bin>(Service.Bins, {
    ...params,
  });
