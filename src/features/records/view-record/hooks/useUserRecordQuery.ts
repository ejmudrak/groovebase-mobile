import { Id } from '@feathersjs/feathers';
import { Record, UserRecord } from '@src/types';
import { getQuery } from '@src/utils/react-query';
import { Service } from '@src/utils/services';

//
export const useUserRecordQuery = (id: Id) => {
  return getQuery<UserRecord>(Service.UserRecords, id);
};
