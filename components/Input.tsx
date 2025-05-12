import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TextInputProps,
  TouchableOpacity,
} from "react-native";
import React, { Ref, RefObject } from "react";
import ShowIcon from "../assets/svg/Show";
import { useTheme } from "../theme/ThemeProvider";

type TProps = {
  label: string;
  ref?: Ref<TextInput>;
  onShowText?: () => void;
} & TextInputProps;

const Input = ({ label, ref, onShowText = () => null, ...rest }: TProps) => {
  const { theme } = useTheme();
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.background.secondary,
        },
      ]}
    >
      <View
        style={{
          marginTop: 12,
          flex: 1,
        }}
      >
        <Text
          style={[
            styles.title,
            {
              color: theme.text.disabled,
            },
          ]}
        >
          {label}
        </Text>
        <TextInput
          placeholderTextColor={theme.text.disabled}
          ref={ref}
          style={[
            styles.input,
            {
              color: theme.text.primary,
            },
          ]}
          textAlignVertical="bottom"
          {...rest}
        />
      </View>
      {label === "Password" ? (
        <TouchableOpacity onPress={onShowText}>
          <ShowIcon />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 10,
    fontWeight: 600,
  },
  input: {
    paddingHorizontal: 0,
    width: "100%",
    fontSize: 14,
    fontWeight: 500,
  },
});
