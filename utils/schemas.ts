import * as yup from 'yup'
export const SignUpSchema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).required()
  })
  .required()
export type TSignUpFormData = yup.InferType<typeof SignUpSchema>