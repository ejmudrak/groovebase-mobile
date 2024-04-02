import * as yup from 'yup';

export const DeleteAccountFormSchema = yup
  .object({
    confirm: yup.string().matches(/(girl bye)/),
  })
  .required();

export interface DeleteAccountFormData
  extends yup.InferType<typeof DeleteAccountFormSchema> {}
