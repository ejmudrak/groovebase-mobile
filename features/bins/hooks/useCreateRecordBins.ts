import { VinylRecord } from 'types';
import createMutation from 'utils/react-query/createMutation';
import { Service } from 'utils/services';

/*
Endpoint: /record-bins
Method: create
Adds a record to a bin
*/

export const useCreateRecordBins = () => {
  return createMutation<VinylRecord, any>(Service.RecordBins);
};
