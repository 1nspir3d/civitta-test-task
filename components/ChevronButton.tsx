import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import ChevronRightIcon from "../assets/svg/ChevronRight";

type TProps = {
  type?: "primary" | "disabled";
  onPress?: () => void;
};

const ChevronButton = ({ type = "primary", onPress = () => null }: TProps) => {
  const isDisabled = type === "disabled";
  return (
    <TouchableOpacity disabled={isDisabled} style={styles[`button-${type}`]}>
      <ChevronRightIcon />
    </TouchableOpacity>
  );
};

export default ChevronButton;

const styles = StyleSheet.create({
  "button-primary": {
    opacity: 1,
  },
  "button-disabled": {
    opacity: 0.4,
  },
});
