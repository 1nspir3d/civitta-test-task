import { StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import CustomButton from "../CustomButton";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { useTheme } from "../../theme/ThemeProvider";

type TProps = {
  renderItems: () => React.JSX.Element[];
  handlePress: () => void;
  currentPage: number;
  dotsX: number[];
};

const Pagination = ({
  renderItems,
  handlePress,
  currentPage,
  dotsX,
}: TProps) => {
  const { theme } = useTheme();
  const translateX = useSharedValue(0);
  const height = useSharedValue(18);

  useEffect(() => {
    const x = dotsX?.[currentPage] ?? 0;

    translateX.value = withTiming(x, { duration: 200 });

    height.value = withSequence(
      withTiming(6, { duration: 200 }),
      withTiming(18, { duration: 200 })
    );
  }, [currentPage]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
      height: height.value,
    };
  });
  return (
    <View style={styles.pagination}>
      <View style={styles.paginationContainer}>
        {renderItems()}
        <Animated.View
          style={[
            styles.activePage,
            {
              backgroundColor: theme.system.primary,
            },
            animatedStyles,
          ]}
        />
      </View>
      <CustomButton title={"Next"} onPress={handlePress} />
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  pagination: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 32,
  },
  paginationContainer: {
    flexDirection: "row",
    width: 40,
    height: 22,
    justifyContent: "space-between",
    alignItems: "center",
  },
  activePage: {
    width: 6,
    height: 18,
    borderRadius: 56,
    position: "absolute",
  },
});
