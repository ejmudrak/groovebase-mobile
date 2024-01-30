import { Service } from 'utils/services';
import { findQuery } from 'utils/react-query';
import { Bin, QueryParams } from 'types';

/*
Endpoint: /bins
Methods: fetch
*/

export const useBinsQuery = (params?: QueryParams<Bin>) =>
  findQuery<Bin>(Service.Bins, {
    ...params,
  });
