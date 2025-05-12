import api from "./axiosInstance"

type TSignupPayload = {
  name: string,
  email: string,
  password: string,
}

interface ISignupResponse {
  message: string
  nextStep: string
  basicAuthCredentials: {
    username: string
    password: string
  }
}

type TLoginAuth = {
  username: string,
  password: string,
} 

export interface ITransaction {
    name: string
    bank: string
    time: string
    amount: number
  }

export interface IAccountData {
  accountType: string
  availableBalance: number
  currency: string
  dateAdded: string
  transactions: ITransaction[]
}

export const signup = async (payload: TSignupPayload) => {
  const res = await api.post('/signup', payload)
  return res.data as ISignupResponse
}

export const fetchAccount = async (auth: TLoginAuth) => {
  const res = await api.get('/account', {
    auth
  })
  return res.data as IAccountData
}