import { Service } from '@src/utils/services';
import { findQuery } from '@src/utils/react-query';
import { QueryParams, Record } from '@src/types';

/*
Endpoint: /bins
Methods: fetch
*/

export const useBinsQuery = (params?: QueryParams<Record>) =>
  findQuery<Record>(Service.Bins, {
    ...params,
  });
