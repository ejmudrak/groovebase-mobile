import { Bin } from 'types';
import createMutation from 'utils/react-query/createMutation';
import { Service } from 'utils/services';

/*
Endpoint: /bins
Method: create
*/

export const useCreateBin = () => {
  return createMutation<Bin, any>(Service.Bins);
};
