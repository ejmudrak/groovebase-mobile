import { Service } from 'utils/services';
import { findQuery } from 'utils/react-query';
import { QueryParams, Record } from 'types';

/*
Endpoint: /records
Methods: fetch
*/

export const useRecordsQuery = (
  params?: QueryParams<Record & { userId: number }>,
) =>
  findQuery<Record>(Service.Records, {
    ...params,
  });
