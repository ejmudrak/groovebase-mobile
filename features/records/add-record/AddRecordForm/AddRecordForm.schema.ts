import * as yup from 'yup';

const selectInputOption = yup.array(
  yup.object({
    label: yup.string().required(),
    value: yup.string().required(),
  }),
);

export const addRecordFormSchema = yup
  .object({
    userId: yup.number().required(),
    recordId: yup.number(),
    action: selectInputOption,
    bins: selectInputOption,
    mediaCondition: selectInputOption.min(1).required(),
    color: yup.string(),
    price: yup.string(),
    notes: yup.string(),
  })
  .required();

export interface AddRecordFormData
  extends yup.InferType<typeof addRecordFormSchema> {}
