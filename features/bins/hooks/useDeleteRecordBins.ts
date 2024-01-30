import { UserRecord } from 'types';
import { Service } from 'utils/services';
import { deleteMutation } from 'utils/react-query';

/*
Endpoint: /record-bins
Method: delete
Deletes records from a user's bin
*/

export const useDeleteRecordBins = (params?: object) => {
  return deleteMutation<any>(Service.RecordBins, params);
};
