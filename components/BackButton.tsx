import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import ChevronLeft from "../assets/svg/ChevronLeft";
import { useTheme } from "../theme/ThemeProvider";

type TProps = {
  onPress?: () => void;
  type?: "primary" | "disabled";
};

const BackButton = ({ onPress = () => null, type = "primary" }: TProps) => {
  const { theme } = useTheme();
  const isDisabled = type === "disabled";
  return (
    <TouchableOpacity
      disabled={isDisabled}
      onPress={onPress}
      style={[
        styles.button,
        { backgroundColor: theme.background.secondary },
        styles[`button-${type}`],
      ]}
    >
      <ChevronLeft />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  button: {
    width: 32,
    height: 32,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  "button-primary": {
    opacity: 1,
  },
  "button-disabled": {
    opacity: 0.4,
  },
});
