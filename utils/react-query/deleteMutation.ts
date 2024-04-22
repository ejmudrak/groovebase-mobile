import { useMutation, useQueryClient } from '@tanstack/react-query';
import feathersClient from 'utils/client';
import { QueryParams } from 'types';

interface UpdateOptions {
  mutationOptions?: any;
}

interface DeleteMutationType {
  idsToDelete?: number[] | string[];
}

export default function deleteMutation<ServiceType>(
  queryKey: string,
  params: QueryParams<ServiceType>,
  options?: UpdateOptions,
) {
  const { mutationOptions = {} } = options || {};
  const queryClient = useQueryClient();

  // We're using the patch method,
  //  so the existing record's data will be merged with `updatedData`
  return useMutation<ServiceType, Error, DeleteMutationType>(
    ({ idsToDelete }: DeleteMutationType) => {
      let deleteParams;

      if (idsToDelete?.length) {
        deleteParams = {
          ...params,
          id: { $in: idsToDelete },
        };
      } else {
        deleteParams = params;
      }

      if (!idsToDelete?.length && !params) {
        throw new Error(
          'MUTATION CANCELLED: No ids or params given, this request will delete all records for this service.',
        );
      } else {
        return feathersClient
          .service(queryKey)
          .remove(null, {
            query: deleteParams,
          })
          .then((deletedData: any) => {
            return deletedData;
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
