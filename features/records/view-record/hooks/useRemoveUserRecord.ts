import { UserRecord } from 'types';
import { Service } from 'utils/services';
import { deleteMutation } from 'utils/react-query';

/*
Endpoint: /user-records
Method: delete
Deletes a record from a user's collection
*/

export const useDeleteUserRecord = (params?: object) => {
  return deleteMutation<UserRecord>(Service.UserRecords, params);
};
