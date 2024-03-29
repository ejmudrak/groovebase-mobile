import { Bin } from 'types';
import { Service } from 'utils/services';
import { deleteMutation } from 'utils/react-query';

/*
Endpoint: /bins
Method: delete
Deletes a user's bin(s), and all records in the bin(s)
*/

export const useDeleteBins = (params?: object) => {
  return deleteMutation<Bin>(Service.Bins, params);
};
