import * as yup from 'yup';

export const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;

export const PASSWORD_MESSAGE =
  'Password must contain 8 characters, one uppercase, one lowercase, and one number';

export const passwordRules = {
  required: true,
  pattern: {
    value: PASSWORD_REGEX,
    message: PASSWORD_MESSAGE,
  },
};

export const signupFormSchema = yup
  .object({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    email: yup
      .string()
      .email('Must be a valid email')
      .required('Email is required'),
    password: yup
      .string()
      .required('Password is required')
      .matches(PASSWORD_REGEX, PASSWORD_MESSAGE),
    confirmPassword: yup
      .string()
      .required()
      .matches(PASSWORD_REGEX, PASSWORD_MESSAGE)
      .oneOf([yup.ref('password')], 'Passwords must match'),
  })
  .required();

export interface SignupFormSchema
  extends yup.InferType<typeof signupFormSchema> {}
