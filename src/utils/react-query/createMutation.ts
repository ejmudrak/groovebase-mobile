import { useQueryClient, useMutation } from '@tanstack/react-query';
import feathersClient from '@src/utils/client';

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
    async (newData: CreateDataType[] | CreateDataType) => {
      // Makes formatted create data payload
      const data = Array.isArray(newData)
        ? newData.map((item: CreateDataType) => getCreateData(item))
        : getCreateData(newData);

      return await feathersClient
        .service(queryKey)
        .create(data)
        .then((data: ServiceType) => data);
    },
    {
      onSuccess: () => {
        // removes query's cache
        queryClient.invalidateQueries([queryKey]);
      },
      ...mutationOptions,
    },
  );
}
