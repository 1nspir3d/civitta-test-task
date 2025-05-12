import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useTheme } from "../theme/ThemeProvider";

type TProps = {
  onPress?: () => void;
  type?: "secondary" | "disabled";
  title?: string;
};

const SkipButton = ({
  onPress = () => null,
  type = "secondary",
  title = "Skip",
}: TProps) => {
  const { theme } = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.skipButton,
        styles[`skipButton-${type}`],
        {
          backgroundColor: theme.button.secondary,
        },
      ]}
    >
      <Text
        style={[
          styles.skipButtonText,
          {
            color: theme.button.secondaryButtonContents,
          },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default SkipButton;

const styles = StyleSheet.create({
  skipButton: {
    width: 61,
    height: 33,
    borderRadius: 30,
    alignSelf: "flex-end",
    alignItems: "center",
    justifyContent: "center",
  },
  "skipButton-secondary": {
    opacity: 1,
  },
  "skipButton-disabled": {
    opacity: 0.4,
  },
  skipButtonText: {
    fontSize: 14,
    fontWeight: 500,
  },
});
