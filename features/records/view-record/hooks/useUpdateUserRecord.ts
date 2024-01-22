import { Record } from 'types';
import { Service } from 'utils/services';
import { EditRecordFormData } from '../EditRecordForm/EditRecordForm.schema';
import { updateMutation } from 'utils/react-query';
import { Id } from '@feathersjs/feathers';

/*
Endpoint: /user-records
Method: patch
Updates a record in a user's collection
*/

export const useUpdateUserRecord = (id: Id, params?: object) => {
  const getUpdateData = ({
    action,
    bins,
    mediaCondition,
    price,
    ...item
  }: EditRecordFormData) => {
    return {
      action: action?.length ? action[0]?.label : '',
      mediaCondition: mediaCondition[0].label,
      price: price ? parseInt(price) : undefined,
      ...item,
    };
  };

  return updateMutation<Record, EditRecordFormData>(
    Service.UserRecords,
    id,
    params,
    {
      getUpdateData,
    },
  );
};
