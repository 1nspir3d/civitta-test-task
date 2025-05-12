import { accountSchema } from "../utils/schemas";
import api from "./axiosInstance";

type TSignupPayload = {
  name: string;
  email: string;
  password: string;
};

interface ISignupResponse {
  message: string;
  nextStep: string;
  basicAuthCredentials: {
    username: string;
    password: string;
  };
}

type TLoginAuth = {
  username: string;
  password: string;
};

export const signup = async (payload: TSignupPayload) => {
  const res = await api.post("/signup", payload);
  return res.data as ISignupResponse;
};

export const fetchAccount = async (auth: TLoginAuth) => {
  const res = await api.get("/account", {
    auth,
  });

  const parsedRes = accountSchema.validate(res.data);
  return parsedRes;
};
