import { Record } from '@src/types';
import createMutation from '@src/utils/react-query/createMutation';
import { Service } from '@src/utils/services';

/*
Endpoint: /record-bins
Method: create
Adds a record to a bin
*/

export const useCreateRecordBin = () => {
  return createMutation<Record, any>(Service.RecordBins);
};
