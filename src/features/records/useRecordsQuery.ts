import { Service } from '@src/utils/services';
import { findQuery } from '@src/utils/react-query';
import { QueryParams, Record } from '@src/types';

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
