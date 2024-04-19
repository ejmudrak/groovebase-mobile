import { VinylRecord } from 'types';
import createMutation from '@utils/react-query/createMutation';
import { Service } from '@utils/services';
import { AddRecordFormData } from '../AddRecordForm/AddRecordForm.schema';

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
      price: price ? parseInt(removeNonNumbers(price)) : undefined,
      ...item,
    };
  };

  return createMutation<VinylRecord, AddRecordFormData>(
    Service.UserRecords,
    getCreateData,
  );
};

const removeNonNumbers = (value: string) => value.replace(/[^0-9]/g, '');
