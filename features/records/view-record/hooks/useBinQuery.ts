import { Id } from '@feathersjs/feathers';
import { Bin } from 'types';
import { getQuery } from 'utils/react-query';
import { Service } from 'utils/services';

/*
Endpoint: /bins
Method: get
Returns one bin by ID
*/

export const useBinQuery = (id?: Id) => {
  return getQuery<Bin>(Service.Bins, id);
};
