import { FlatList, ListRenderItem, StyleSheet, Text, View } from "react-native";
import React, { useCallback } from "react";
import BackButton from "../BackButton";
import { ITransaction } from "../../api/auth";
import TransactionItem from "./TransactionItem";
import ChevronButton from "../ChevronButton";
import { useTheme } from "../../theme/ThemeProvider";

type TProps = {
  transactions: ITransaction[];
};

const RecentTransactionsCard = ({ transactions }: TProps) => {
  const { theme } = useTheme();
  const renderItem: ListRenderItem<ITransaction> = useCallback(
    ({ item }) => <TransactionItem transaction={item} />,
    []
  );
  return (
    <View
      style={[
        styles.transactionsCard,
        {
          backgroundColor: theme.background.secondary,
        },
      ]}
    >
      <View style={styles.titleContainer}>
        <Text style={[styles.title, { color: theme.text.primary }]}>
          Recent Transactions
        </Text>
        <ChevronButton />
      </View>
      <FlatList
        keyExtractor={(item, index) => `${item.time}-${index}`}
        data={transactions}
        renderItem={renderItem}
        contentContainerStyle={{
          gap: 16,
        }}
      />
    </View>
  );
};

export default RecentTransactionsCard;

const styles = StyleSheet.create({
  transactionsCard: {
    width: "100%",
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 24,
    borderRadius: 10,
    gap: 16,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 12,
    fontWeight: 600,
  },
});
