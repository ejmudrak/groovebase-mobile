import { Id } from '@feathersjs/feathers';
import { Record, UserRecord } from 'types';
import { getQuery } from 'utils/react-query';
import { Service } from 'utils/services';

//
export const useUserRecordQuery = (id: Id) => {
  return getQuery<UserRecord>(Service.UserRecords, id);
};
