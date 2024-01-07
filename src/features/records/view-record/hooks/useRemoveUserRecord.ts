import { UserRecord } from '@src/types';
import { Service } from '@src/utils/services';
import { deleteMutation } from '@src/utils/react-query';

/*
Endpoint: /user-records
Method: delete
Deletes a record from a user's collection
*/

export const useDeleteUserRecord = (params?: object) => {
  return deleteMutation<UserRecord>(Service.UserRecords, params);
};
