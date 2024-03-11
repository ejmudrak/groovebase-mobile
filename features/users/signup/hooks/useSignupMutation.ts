import feathersClient from '@utils/client';
import { Service } from '@utils/services';
import { useMutation } from '@tanstack/react-query';

/*
Endpoint: /users
Method: create
*/

interface SignupData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const useSignupMutation = () => {
  return useMutation<SignupData, Error, any>(
    ({ email, ...restOfData }: SignupData) => {
      return feathersClient.service(Service.Users).create({
        email: email.toLowerCase(),
        ...restOfData,
      });
    },
  );
};
