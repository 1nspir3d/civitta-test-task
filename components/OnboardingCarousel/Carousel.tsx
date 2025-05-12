import { StyleSheet, Text, View } from "react-native";
import React, { Ref } from "react";
import PagerView from "react-native-pager-view";
import { useTheme } from "../../theme/ThemeProvider";

type TProps = {
  data: { title: string; text: string }[];
  onPageSelected: (e: any) => void;
  ref: Ref<PagerView>;
};

const Carousel = ({ data, onPageSelected, ref }: TProps) => {
  const { theme } = useTheme();
  return (
    <PagerView
      ref={ref}
      style={styles.pagerView}
      initialPage={0}
      onPageSelected={onPageSelected}
    >
      {data.map((item, index) => (
        <View
          collapsable={false}
          style={styles.infoBoxTextContainer}
          key={`onboard-text-${index}`}
        >
          <Text
            style={[
              styles.infoBoxTitle,
              {
                color: theme.title.primary,
              },
            ]}
          >
            {item.title}
          </Text>
          <Text
            style={[
              styles.infoBoxText,
              {
                color: theme.text.secondary,
              },
            ]}
          >
            {item.text}
          </Text>
        </View>
      ))}
    </PagerView>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
  infoBoxTextContainer: {
    alignItems: "center",
    height: 140,
    justifyContent: "space-between",
  },
  infoBoxTitle: {
    fontSize: 26,
    fontWeight: 700,
    textAlign: "center",
  },
  infoBoxText: {
    fontSize: 16,
    fontWeight: 500,
    textAlign: "center",
    textAlignVertical: "top",
    paddingHorizontal: 10,
  },
});
