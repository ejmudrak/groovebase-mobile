import { useCurrentUser } from '@features/users/hooks/useCurrentUser';
import { useQueryClient } from '@tanstack/react-query';
import { Bin } from 'types';
import createMutation from 'utils/react-query/createMutation';
import { Service } from 'utils/services';

/*
Endpoint: /bins
Method: create
*/

export const useCreateBin = () => {
  const getCreateData = (item: Bin) => item;

  return createMutation<Bin, any>(Service.Bins);
};
