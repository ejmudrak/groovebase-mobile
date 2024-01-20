import * as yup from 'yup';

const selectInputOption = yup.array(
  yup.object({
    label: yup.string().required(),
    value: yup.string().required(),
  }),
);

export const editRecordFormSchema = yup
  .object({
    action: selectInputOption,
    bins: selectInputOption,
    mediaCondition: selectInputOption.min(1).required(),
    color: yup.string(),
    price: yup.string(),
    notes: yup.string(),
  })
  .required();

export interface EditRecordFormData
  extends yup.InferType<typeof editRecordFormSchema> {}
