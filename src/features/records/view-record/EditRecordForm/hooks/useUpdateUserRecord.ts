import { Record } from '@src/types';
import { Service } from '@src/utils/services';
import { EditRecordFormData } from '../EditRecordForm.schema';
import { updateMutation } from '@src/utils/react-query';
import { Id } from '@feathersjs/feathers';

/*
Endpoint: /user-records
Method: patch
Updates a record in a user's collection
*/

export const useUpdateUserRecord = (id: Id, params?: object) => {
  return updateMutation<Record, EditRecordFormData>(
    Service.UserRecords,
    id,
    params,
  );
};
