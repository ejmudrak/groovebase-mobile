import { Record } from 'types';
import createMutation from '@utils/react-query/createMutation';
import { Service } from '@utils/services';

/*
Endpoint: /records
Method: create
Adds data for a vinyl record to database
*/

export const useCreateRecord = () => {
  const getCreateData = ({ year, ...item }: Record) => {
    return {
      year: typeof year === 'string' ? parseInt(year) : year,
      ...item,
    };
  };

  return createMutation<Record, any>(Service.Records, getCreateData);
};
