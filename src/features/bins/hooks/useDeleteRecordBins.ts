import { UserRecord } from '@src/types';
import { Service } from '@src/utils/services';
import { deleteMutation } from '@src/utils/react-query';

/*
Endpoint: /record-bins
Method: delete
Deletes records from a user's bin
*/

export const useDeleteRecordBins = (params?: object) => {
  return deleteMutation<any>(Service.RecordBins, params);
};
