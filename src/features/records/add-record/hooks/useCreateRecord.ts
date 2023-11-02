import { Record } from '@src/types';
import createMutation from '@src/utils/react-query/createMutation';
import { Service } from '@src/utils/services';

/*
Endpoint: /records
Method: create
Adds data for a vinyl record to database
*/

export const useCreateRecord = () => {
  const getCreateData = ({ year, ...item }: Record) => {
    console.log('item: ', item);
    return {
      year: typeof year === 'string' ? parseInt(year) : year,
      ...item,
    };
  };

  return createMutation<Record, any>(Service.Records, getCreateData);
};
