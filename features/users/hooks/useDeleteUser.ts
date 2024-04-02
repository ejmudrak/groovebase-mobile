import { User } from 'types';
import { Service } from 'utils/services';
import { deleteMutation } from 'utils/react-query';

/*
Endpoint: /users
Method: delete
Deletes a user's account
*/

export const useDeleteUser = (params?: object) => {
  return deleteMutation<User>(Service.Users, params);
};
