import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "../theme/ThemeProvider";

type TProps = {
  title?: string;
  leftItem?: () => React.JSX.Element | null;
  rightItem?: () => React.JSX.Element | null;
};

const Header = ({
  title,
  leftItem = () => null,
  rightItem = () => null,
}: TProps) => {
  const { theme } = useTheme();
  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>{leftItem()}</View>
      <View style={styles.headerMiddle}>
        <Text
          style={[
            styles.title,
            {
              color: theme.text.primary,
            },
          ]}
        >
          {title}
        </Text>
      </View>
      <View style={styles.headerRight}>{rightItem()}</View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    height: 48,
  },
  headerLeft: {
    width: 40,
    alignItems: "flex-start",
  },
  headerMiddle: {
    flex: 1,
    alignItems: "center",
  },
  headerRight: {
    width: 40,
    alignItems: "flex-end",
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
  },
});
