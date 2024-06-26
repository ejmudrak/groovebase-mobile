import { useQueryClient, useMutation } from '@tanstack/react-query';
import feathersClient from 'utils/client';

interface CreateMutationOptions {
  mutationOptions?: any;
}

export default function createMutation<ServiceType, CreateDataType>(
  queryKey: string,
  getCreateData: (item: any) => any = (item: any) => item,
  options?: CreateMutationOptions,
) {
  const queryClient = useQueryClient();
  const { mutationOptions = {} } = options || {};

  // We add `CreateDataType` to the return types of useMutation so that we can use it on the `mutationFn`
  return useMutation<ServiceType, Error, CreateDataType[] | CreateDataType>(
    async (newData: CreateDataType[] | CreateDataType, params?: object) => {
      // Makes formatted create data payload
      const data = Array.isArray(newData)
        ? newData.map((item: CreateDataType) => getCreateData(item))
        : getCreateData(newData);

      return await feathersClient
        .service(queryKey)
        .create(data, params)
        .then((data: ServiceType) => data);
    },
    {
      onSuccess: async () => {
        // removes query's cache
        await queryClient.invalidateQueries({ queryKey: [queryKey] });
      },
      ...mutationOptions,
    },
  );
}
