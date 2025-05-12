import { StyleSheet, Text, View } from "react-native";
import {
  Controller,
  Control,
  UseFormSetFocus,
  FormState,
} from "react-hook-form";
import { TSignUpFormData } from "../utils/schemas";
import Input from "./Input";
import { useState } from "react";
import { useTheme } from "../theme/ThemeProvider";

type TProps = {
  control: Control<TSignUpFormData, any, TSignUpFormData>;
  setFocus: UseFormSetFocus<TSignUpFormData>;
  formState: FormState<TSignUpFormData>;
};

const SignUpForm = ({ control, setFocus, formState: { errors } }: TProps) => {
  const { theme } = useTheme();
  const [hidePassword, setHidePassword] = useState(true);

  const onShowPassword = () => {
    setHidePassword((prev) => !prev);
  };
  return (
    <View
      style={{
        width: "100%",
        gap: 16,
      }}
    >
      {/* <View style={styles.errorsBox}>
        {errors.name && (
          <Text
            style={{
              color: theme.text.secondary,
            }}
          >
            ● {errors.name?.message}
          </Text>
        )}
        {errors.email && (
          <Text
            style={{
              color: theme.text.secondary,
            }}
          >
            ● {errors.email?.message}
          </Text>
        )}
        {errors.password && (
          <Text
            style={{
              color: theme.text.secondary,
            }}
          >
            ● {errors.password?.message}
          </Text>
        )}
      </View> */}
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <Input
            ref={ref}
            label="Name"
            onChangeText={onChange}
            value={value}
            onBlur={onBlur}
            onSubmitEditing={() => {
              setFocus("email");
            }}
            placeholder="Louis Real"
            returnKeyType="next"
          />
        )}
        name="name"
      />
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <Input
            ref={ref}
            label="Email"
            onChangeText={onChange}
            value={value}
            onBlur={onBlur}
            placeholder="Louis04real@gmail.com"
            keyboardType="email-address"
            returnKeyType="next"
            onSubmitEditing={() => {
              setFocus("password");
            }}
          />
        )}
        name="email"
      />
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <Input
            ref={ref}
            label="Password"
            onChangeText={onChange}
            value={value}
            onBlur={onBlur}
            secureTextEntry={hidePassword}
            returnKeyType="done"
            onShowText={onShowPassword}
          />
        )}
        name="password"
      />
      <View style={styles.errorsBox}>
        {errors.name && (
          <Text
            style={{
              color: theme.text.secondary,
            }}
          >
            ● {errors.name?.message}
          </Text>
        )}
        {errors.email && (
          <Text
            style={{
              color: theme.text.secondary,
            }}
          >
            ● {errors.email?.message}
          </Text>
        )}
        {errors.password && (
          <Text
            style={{
              color: theme.text.secondary,
            }}
          >
            ● {errors.password?.message}
          </Text>
        )}
      </View>
    </View>
  );
};

export default SignUpForm;

const styles = StyleSheet.create({
  errorsBox: {},
});
