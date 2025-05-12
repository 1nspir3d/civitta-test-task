import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TChangeThemeProps } from "../navigation/navigation.types";
import { useTheme } from "../theme/ThemeProvider";
import Header from "../components/Header";
import BackButton from "../components/BackButton";

const ChangeTheme = ({ route, navigation }: TChangeThemeProps) => {
  const { theme, themes, toggleSystem, setTheme } = useTheme();
  const handleBack = () => {
    navigation.goBack();
  };
  const renderLeftItem = useCallback(
    () => <BackButton onPress={handleBack} />,
    []
  );
  const setDarkTheme = () => {
    setTheme("dark");
  };
  const setLightTheme = () => {
    setTheme("light");
  };
  const setSystemTheem = () => {
    toggleSystem();
  };
  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: theme.background.primary,
        },
      ]}
    >
      <Header title="Switch between themes" leftItem={renderLeftItem} />
      <View style={styles.main}>
        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor: themes.light.button.secondary,
            },
          ]}
          onPress={setLightTheme}
        >
          <Text
            style={[
              styles.text,
              {
                color: themes.light.button.secondaryButtonContents,
              },
            ]}
          >
            Light
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor: themes.dark.button.secondary,
            },
          ]}
          onPress={setDarkTheme}
        >
          <Text
            style={[
              styles.text,
              {
                color: themes.dark.button.secondaryButtonContents,
              },
            ]}
          >
            Dark
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor: theme.button.secondary,
            },
          ]}
          onPress={setSystemTheem}
        >
          <Text
            style={[
              styles.text,
              {
                color: theme.button.secondaryButtonContents,
              },
            ]}
          >
            System
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ChangeTheme;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  main: {
    flex: 1,
    gap: 16,
  },
  button: {
    borderRadius: 20,
    width: "100%",
    height: 40,
    padding: 10,
    paddingStart: 15,
  },
  text: {
    fontSize: 16,
    fontWeight: 700,
  },
});
