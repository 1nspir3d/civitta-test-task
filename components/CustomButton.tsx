import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  TouchableWithoutFeedbackProps,
  View,
} from "react-native";
import React from "react";
import { useTheme } from "../theme/ThemeProvider";

type TProps = {
  onPress: () => void;
  title: string;
  type?: "primary" | "secondary" | "disabled";
};

const CustomButton = ({ onPress, title, type = "primary" }: TProps) => {
  const { theme } = useTheme();
  return (
    <TouchableOpacity
      disabled={type === "disabled"}
      style={[
        styles.button,
        styles[`button-${type}`],
        {
          backgroundColor: theme.button[`${type}`],
        },
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.text,
          {
            color: theme.button[`${type}ButtonContents`],
          },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    borderRadius: 300,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
  },
  "button-primary": {
    opacity: 1,
  },
  "button-secondary": {
    opacity: 1,
  },
  "button-disabled": {
    opacity: 0.4,
  },
  text: {
    fontSize: 16,
    fontWeight: 600,
    lineHeight: 24,
    letterSpacing: 0,
  },
});
