import { Record } from '@src/types';
import createMutation from '@src/utils/react-query/createMutation';
import { Service } from '@src/utils/services';
import { AddRecordFormData } from '../AddRecordForm/add-record-form.schema';

/*
Endpoint: /user-records
Method: create
Adds a record to a user's collection
*/

export const useCreateUserRecord = () => {
  const getCreateData = ({
    action,
    bins,
    mediaCondition,
    price,
    ...item
  }: AddRecordFormData) => {
    return {
      action: action?.length ? action[0]?.label : '',
      mediaCondition: mediaCondition[0].label,
      price: price ? parseInt(price) : undefined,
      ...item,
    };
  };

  return createMutation<Record, AddRecordFormData>(
    Service.UserRecords,
    getCreateData,
  );
};
