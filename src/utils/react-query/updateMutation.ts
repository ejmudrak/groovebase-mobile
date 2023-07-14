import { useMutation } from '@tanstack/react-query';
import feathersClient from '@src/utils/client';

interface UpdateOptions {
  mutationOptions?: any;
}

export default function updateMutation<ServiceType, UpdateData>(
  queryKey: string,
  id: string | number | null | undefined,
  params?: QueryParams<ServiceType>,
  options?: UpdateOptions,
) {
  const { mutationOptions = {} } = options || {};

  // We're using the patch method,
  //  so the existing record's data will be merged with `updatedData`
  return useMutation<ServiceType, Error, UpdateData>(
    (updatedData) =>
      feathersClient
        .service(queryKey)
        .patch(id, updatedData, { query: params })
        .then((data: ServiceType) => {
          return data;
        }),
    mutationOptions,
  );
}
