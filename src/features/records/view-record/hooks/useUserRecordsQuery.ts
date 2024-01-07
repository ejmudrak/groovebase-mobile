import { Service } from '@src/utils/services';
import { findQuery } from '@src/utils/react-query';
import { QueryParams, UserRecord } from '@src/types';

/*
Endpoint: /user-records
Methods: fetch
*/

export const useUserRecordsQuery = (params?: QueryParams<UserRecord>) =>
  findQuery<UserRecord>(Service.UserRecords, {
    ...params,
  });
