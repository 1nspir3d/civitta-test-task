import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import CheckboxIcon from "../assets/svg/CheckboxIcon";

type TProps = {
  checked: boolean;
  onPress: () => void;
};

const Checkbox = ({ checked, onPress }: TProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: 24,
        height: 24,
        borderRadius: 10,
      }}
    >
      <CheckboxIcon checked={checked} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkmark: {
    width: 10,
    height: 10,
  },
});

export default Checkbox;
