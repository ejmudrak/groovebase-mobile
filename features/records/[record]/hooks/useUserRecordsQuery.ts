import { Service } from 'utils/services';
import { findQuery } from 'utils/react-query';
import { QueryParams, UserRecord } from 'types';

/*
Endpoint: /user-records
Methods: fetch
*/

export const useUserRecordsQuery = (params?: QueryParams<UserRecord>) =>
  findQuery<UserRecord>(Service.UserRecords, {
    ...params,
  });
