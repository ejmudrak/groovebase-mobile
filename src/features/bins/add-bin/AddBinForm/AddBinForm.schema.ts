import * as yup from 'yup';

export const addBinFormSchema = yup
  .object({
    userId: yup.number().required(),
    name: yup.string().required(),
  })
  .required();

export interface AddBinFormData
  extends yup.InferType<typeof addBinFormSchema> {}
