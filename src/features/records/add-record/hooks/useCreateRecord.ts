import { Record } from '@src/types';
import createMutation from '@src/utils/react-query/createMutation';
import { Service } from '@src/utils/services';

/*
Endpoint: /records
Method: create
Adds data for a vinyl record to database
*/

export const useCreateRecord = () => {
  const getCreateData = ({ artist, year, ...item }: any) => {
    return {
      artist: artist.name,
      year: parseInt(year),
      ...item,
    };
  };

  return createMutation<Record, any>(Service.Records, getCreateData);
};
