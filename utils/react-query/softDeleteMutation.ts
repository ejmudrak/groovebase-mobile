import { useMutation, useQueryClient } from '@tanstack/react-query';
import feathersClient from 'utils/client';
import { QueryParams } from 'types';

interface SoftDeleteOptions {
  mutationOptions?: any;
}

interface SoftDeleteMutationType<ServiceType> {
  data: Partial<ServiceType>;
  idsToDelete: number[] | string[];
}

export default function softDeleteMutation<ServiceType>(
  queryKey: string,
  params?: QueryParams<ServiceType>,
  options?: SoftDeleteOptions,
) {
  const { mutationOptions = {} } = options || {};
  const queryClient = useQueryClient();

  // We're using the patch method,
  //  so the existing record's data will be merged with `updatedData`
  return useMutation<ServiceType, Error, SoftDeleteMutationType<ServiceType>>(
    ({ data, idsToDelete }: SoftDeleteMutationType<ServiceType>) => {
      if (!idsToDelete.length) {
        console.error(
          'MUTATION CANCELLED: No ids given, this request will soft delete all records for this service.',
        );
      } else {
        return feathersClient
          .service(queryKey)
          .patch(null, data, { query: { ...params, id: { $in: idsToDelete } } })
          .then((patchedData: ServiceType) => {
            return patchedData;
          });
      }
    },
    {
      onSuccess: async () => {
        // removes query key's cache
        await queryClient.invalidateQueries([queryKey]);
      },
      ...mutationOptions,
    },
  );
}
