import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import OnboardingScreen from "../screens/OnboardingScreen";
import SignUpScreen from "../screens/SignUpScreen";
import MyAccountScreen from "../screens/MyAccountScreen";
import { NavigationContainer } from "@react-navigation/native";
import { TRootStackParamList } from "./navigation.types";
import { getFirstLaunchFlag, setFirstLaunchFlag } from "../utils/storage";
import ChangeTheme from "../screens/ChangeTheme";

const Stack = createNativeStackNavigator<TRootStackParamList>();

const AppNavigator = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | null>(null);

  useEffect(() => {
    getFirstLaunchFlag().then((flag) => {
      if (flag === null) {
        setFirstLaunchFlag();
        setIsFirstLaunch(true);
        return;
      }
      setIsFirstLaunch(false);
    });
  }, []);

  if (isFirstLaunch === null) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isFirstLaunch ? "Onboarding" : "Signup"}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Signup" component={SignUpScreen} />
        <Stack.Screen name="MyAccount" component={MyAccountScreen} />
        <Stack.Screen name="ChangeTheme" component={ChangeTheme} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
