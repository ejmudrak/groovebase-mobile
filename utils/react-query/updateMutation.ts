import { useMutation } from '@tanstack/react-query';
import feathersClient from 'utils/client';
import { QueryParams } from 'types';
import { Id } from '@feathersjs/feathers';

interface UpdateOptions {
  mutationOptions?: any;
  getUpdateData?: (item: any) => any;
}

export default function updateMutation<ServiceType, UpdateData>(
  queryKey: string,
  id: Id,
  params?: QueryParams<ServiceType>,
  options?: UpdateOptions,
) {
  const { mutationOptions = {}, getUpdateData = (data: any) => data } =
    options || {};

  // We're using the patch method,
  //  so the existing record's data will be merged with `updatedData`
  return useMutation<ServiceType, Error, UpdateData>(
    async (updatedData: any) => {
      // Makes formatted update data payload
      const data = Array.isArray(updatedData)
        ? updatedData.map((item: UpdateData) => getUpdateData(item))
        : getUpdateData(updatedData);

      return await feathersClient
        .service(queryKey)
        .patch(id, data, { query: params })
        .then((data: ServiceType) => {
          return data;
        });
    },
    mutationOptions,
  );
}
