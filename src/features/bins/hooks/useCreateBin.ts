import { Bin } from '@src/types';
import createMutation from '@src/utils/react-query/createMutation';
import { Service } from '@src/utils/services';

/*
Endpoint: /bins
Method: create
*/

export const useCreateBin = () => {
  return createMutation<Bin, any>(Service.Bins);
};
