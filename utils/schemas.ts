import * as yup from 'yup'
export const SignUpSchema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).required()
  })
  .required()
export type TSignUpFormData = yup.InferType<typeof SignUpSchema>

export const transactionSchema = yup.object({
  name: yup.string().required(),
  bank: yup.string().required(),
  time: yup.string().required(),
  amount: yup.number().required(),
});

export const accountSchema = yup.object({
  accountType: yup.string().required(),
  availableBalance: yup.number().required(),
  currency: yup.string().required(),
  dateAdded: yup.string().required(),
  transactions: yup.array().of(transactionSchema).required(),
});

export type TTransaction = yup.InferType<typeof transactionSchema>
export type TAccountData = yup.InferType<typeof accountSchema>