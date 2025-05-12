import { StyleSheet, Text, View } from "react-native";
import React, { useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TMyAccountProps } from "../navigation/navigation.types";
import BackButton from "../components/BackButton";
import Header from "../components/Header";
import KudaIcon from "../assets/svg/KudaIcon";
import InfoCard from "../components/InfoCard";
import RecentTransactionsCard from "../components/RecentTransactions/RecentTransactionsCard";
import { useTheme } from "../theme/ThemeProvider";
import SkipButton from "../components/SkipButton";

const MyAccountScreen = ({ route, navigation }: TMyAccountProps) => {
  const { theme } = useTheme();
  const handleThemes = () => {
    navigation.navigate("ChangeTheme");
  };
  const renderLeftItem = useCallback(() => <BackButton />, []);
  const renderRightItem = useCallback(
    () => <SkipButton title="Theme" onPress={handleThemes} />,
    []
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
      <Header
        title="My Account"
        // it is stated in UI design to ignore this button, but it's here just in case
        // leftItem={renderLeftItem}
        rightItem={renderRightItem}
      />
      <View style={styles.main}>
        <KudaIcon />
        <Text
          style={[
            styles.title,
            {
              color: theme.title.secondary,
            },
          ]}
        >
          Kuda Bank
        </Text>
        <InfoCard account={route.params.account} />
        <RecentTransactionsCard
          transactions={route.params.account.transactions}
        />
      </View>
    </SafeAreaView>
  );
};

export default MyAccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  main: {
    alignItems: "center",
    flex: 1,
    gap: 24,
    marginTop: 28,
  },
  title: {
    fontSize: 14,
    fontWeight: 600,
  },
});
