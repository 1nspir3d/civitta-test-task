import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Linking,
  Modal,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "../components/BackButton";
import SignUpForm from "../components/SignUpForm";
import Checkbox from "../components/Checkbox";
import CustomButton from "../components/CustomButton";
import { SubmitHandler, useForm } from "react-hook-form";
import { SignUpSchema, TSignUpFormData } from "../utils/schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { TSignupScreenProps } from "../navigation/navigation.types";
import { fetchAccount, signup } from "../api/auth";
import Header from "../components/Header";
import { useTheme } from "../theme/ThemeProvider";

const SignUpScreen = ({ route, navigation }: TSignupScreenProps) => {
  const { theme } = useTheme();
  const [backButtonType, setBackButtonType] = useState<"primary" | "disabled">(
    "primary"
  );
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleCheckbox = () => {
    setIsChecked((prev) => !prev);
  };
  console.log(isLoading);
  const { control, handleSubmit, formState, setFocus } =
    useForm<TSignUpFormData>({
      resolver: yupResolver(SignUpSchema),
      defaultValues: {
        name: "",
        email: "",
        password: "",
      },
      mode: "onSubmit",
    });

  const onSubmit: SubmitHandler<TSignUpFormData> = useCallback(async (data) => {
    try {
      setIsLoading(true);
      const signupRes = await signup(data);
      const { basicAuthCredentials } = signupRes;
      const account = await fetchAccount(basicAuthCredentials);
      setIsLoading(false);
      navigation.replace("MyAccount", { account });
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleSignIn = () => {
    Linking.openURL("https://example.com");
  };

  const handleToS = () => {
    Linking.openURL("https://example.com");
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const renderLeftItem = useCallback(
    () => <BackButton type={backButtonType} onPress={handleBack} />,
    [backButtonType]
  );

  useEffect(() => {
    const canGoBack = navigation.canGoBack();
    if (canGoBack) return setBackButtonType("primary");
    setBackButtonType("disabled");
  }, [navigation]);

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: theme.background.primary,
        },
      ]}
    >
      <KeyboardAvoidingView
        style={[{ flex: 1, gap: 32, justifyContent: "space-between" }]}
        behavior="padding"
      >
        <Header leftItem={renderLeftItem} />
        <View style={styles.titleContainter}>
          <Text style={[styles.title, { color: theme.title.primary }]}>
            Create account
          </Text>
          <Text style={[styles.subTitle, { color: theme.text.secondary }]}>
            Complete the sign up to get started
          </Text>
        </View>
        <View style={styles.formContainer}>
          <SignUpForm
            control={control}
            setFocus={setFocus}
            formState={formState}
          />
          <View style={styles.tosContainer}>
            <Checkbox checked={isChecked} onPress={handleCheckbox} />
            <Text
              style={[
                styles.tos,
                {
                  color: theme.text.primary,
                },
              ]}
            >
              By signing up, you agree to the{" "}
              <Text onPress={handleToS} style={{ color: theme.button.primary }}>
                Terms of Service and Privacy Policy
              </Text>
            </Text>
          </View>
        </View>
        <View style={styles.accountContainer}>
          <Text
            style={[
              styles.accountText,
              {
                color: theme.text.primary,
              },
            ]}
          >
            Already have an account?{" "}
            <Text
              onPress={handleSignIn}
              style={{ color: theme.button.primary }}
            >
              Sign in
            </Text>
          </Text>
          <CustomButton
            type={isChecked ? "primary" : "disabled"}
            onPress={handleSubmit(onSubmit)}
            title="Create account"
          />
        </View>
      </KeyboardAvoidingView>
      {isLoading && (
        <Modal
          statusBarTranslucent
          animationType="fade"
          visible={true}
          transparent={true}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              paddingHorizontal: 20,
              backgroundColor: "rgba(0,0,0,0.3)",
            }}
          >
            <View
              style={{
                backgroundColor: theme.background.secondary,
                width: "50%",
                height: 150,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 20,
              }}
            >
              <ActivityIndicator color={theme.system.primary} size={"large"} />
            </View>
          </View>
        </Modal>
      )}
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
    paddingBottom: 16,
  },
  titleContainter: {
    width: "100%",
    height: 72,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 32,
    fontWeight: 700,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: 500,
  },
  formContainer: {
    justifyContent: "space-between",
    gap: 32,
  },
  tosContainer: {
    flexDirection: "row",
    gap: 8,
  },
  tos: {
    fontSize: 16,
    fontWeight: 500,
    flexShrink: 1,
  },
  accountContainer: {
    alignItems: "center",
    gap: 16,
  },
  accountText: {
    fontSize: 16,
    fontWeight: 500,
    gap: 16,
  },
});
