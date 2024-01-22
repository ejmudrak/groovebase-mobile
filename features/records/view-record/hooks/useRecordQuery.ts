import { Id } from '@feathersjs/feathers';
import { Record } from 'types';
import { getQuery } from 'utils/react-query';
import { Service } from 'utils/services';

/*
Endpoint: /records
Method: get
Returns one record by ID
*/

export const useRecordQuery = (id?: Id) => {
  return getQuery<Record>(Service.Records, id);
};
