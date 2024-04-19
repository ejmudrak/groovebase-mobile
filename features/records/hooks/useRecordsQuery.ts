import { Service } from 'utils/services';
import { findQuery } from 'utils/react-query';
import { QueryParams, VinylRecord } from 'types';

/*
Endpoint: /records
Methods: fetch
*/

export const useRecordsQuery = (
  params?: QueryParams<VinylRecord & { userId: number }>,
) =>
  findQuery<VinylRecord>(Service.Records, {
    ...params,
  });
