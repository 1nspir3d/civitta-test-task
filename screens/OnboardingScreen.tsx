import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useCallback, useRef, useState } from "react";
import { TOnboardingScreenProps } from "../navigation/navigation.types";
import { SafeAreaView } from "react-native-safe-area-context";
import PagerView from "react-native-pager-view";
import Carousel from "../components/OnboardingCarousel/Carousel";
import Pagination from "../components/OnboardingCarousel/Pagination";
import SkipButton from "../components/SkipButton";
import Header from "../components/Header";
import { useTheme } from "../theme/ThemeProvider";

const onboardingText: { title: string; text: string }[] = new Array(4).fill({
  title: "You ought to know where your money goes",
  text: "Get an overview of how you are performing and motivate yourself to achieve even more",
});

const OnboardingScreen = ({ route, navigation }: TOnboardingScreenProps) => {
  const { theme } = useTheme();

  const [currentPage, setCurrentPage] = useState(0);
  const pagerViewRef = useRef<PagerView>(null);
  const [dotsY, setDotsX] = useState<number[]>([]);

  const handlePagination = () => {
    if (currentPage < 3) {
      return pagerViewRef.current?.setPage(
        Math.min(currentPage + 1, onboardingText.length)
      );
    }
    navigation.navigate("Signup");
  };

  const handleSkip = () => {
    navigation.navigate("Signup");
  };

  const renderPaginationDots = useCallback(() => {
    return onboardingText.map((item, index) => (
      <View
        onLayout={(e) => {
          if (e?.nativeEvent?.layout) {
            e.persist();
            setDotsX((prev) => [...prev, e.nativeEvent.layout.x]);
          }
        }}
        key={`pagination-dot-${index}`}
        style={{
          width: 6,
          height: 6,
          borderRadius: 56,
          backgroundColor: theme.system.secondary,
        }}
      />
    ));
  }, [onboardingText]);

  const onPageSelected = (e: any) => {
    setCurrentPage(e.nativeEvent.position);
  };

  const renderRightItem = useCallback(
    () => <SkipButton onPress={handleSkip} />,
    [handleSkip]
  );

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: theme.background.primary,
        },
      ]}
    >
      <Header rightItem={renderRightItem} />
      <Image
        source={require("../assets/Onboarding.png")}
        style={{
          alignSelf: "center",
        }}
        height={370}
        width={375}
      />
      <View
        style={[
          styles.infoBox,
          {
            backgroundColor: theme.background.secondary,
          },
        ]}
      >
        <Carousel
          ref={pagerViewRef}
          data={onboardingText}
          onPageSelected={onPageSelected}
        />
        <Pagination
          dotsX={dotsY}
          currentPage={currentPage}
          handlePress={handlePagination}
          renderItems={renderPaginationDots}
        />
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: "space-between",
  },
  header: {
    paddingVertical: 8,
  },
  infoBox: {
    width: "100%",
    height: 343,
    gap: 16,
    paddingVertical: 36,
    paddingHorizontal: 24,
    alignSelf: "center",
    borderRadius: 50,
  },
});
