import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { IAccountData } from "../api/auth";

export type TRootStackParamList = {
  Onboarding: undefined;
  Signup: undefined;
  MyAccount: {
    account: IAccountData
  };
  ChangeTheme: undefined
};

export type TOnboardingScreenProps = NativeStackScreenProps<TRootStackParamList, "Onboarding">;
export type TSignupScreenProps = NativeStackScreenProps<TRootStackParamList, "Signup">;
export type TMyAccountProps = NativeStackScreenProps<TRootStackParamList, "MyAccount">;
export type TChangeThemeProps = NativeStackScreenProps<TRootStackParamList,'ChangeTheme'>