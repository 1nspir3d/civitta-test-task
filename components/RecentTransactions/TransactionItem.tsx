import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { ITransaction } from "../../api/auth";
import { formatCurrency } from "../../utils/formatCurrency";
import { useTheme } from "../../theme/ThemeProvider";

type TProps = {
  transaction: ITransaction;
};

const TransactionItem = ({ transaction }: TProps) => {
  const { theme } = useTheme();
  const { formattedValue, sign } = formatCurrency(transaction.amount, "en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
    signDisplay: "always",
  });
  return (
    <TouchableOpacity style={styles.transaction}>
      <View
        style={[
          styles.imageContainer,
          {
            backgroundColor: theme.background.primary,
          },
        ]}
      >
        <Text
          style={[
            styles.letter,
            {
              color: theme.system.primary,
            },
          ]}
        >
          {transaction.name.charAt(0)}
        </Text>
      </View>
      <View style={styles.nameContainer}>
        <Text style={[styles.name, { color: theme.text.primary }]}>
          {transaction.name}
        </Text>
        <Text
          style={[styles.bankName, { color: theme.text.primary, opacity: 0.5 }]}
        >
          {transaction.bank} {transaction.time}
        </Text>
      </View>
      <View style={styles.ammountContainer}>
        <Text
          style={[
            styles.ammount,
            {
              color: sign === "+" ? theme.system.success : theme.text.primary,
            },
          ]}
        >
          {formattedValue}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default TransactionItem;

const styles = StyleSheet.create({
  transaction: {
    width: "100%",
    gap: 12,
    flexDirection: "row",
  },
  imageContainer: {
    width: 36,
    height: 36,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  letter: {
    fontSize: 14,
    fontWeight: 600,
  },
  nameContainer: {
    flex: 1,
  },
  name: {
    fontSize: 14,
    fontWeight: 600,
  },
  bankName: {
    fontSize: 12,
    fontWeight: 400,
  },
  ammountContainer: {
    justifyContent: "center",
  },
  ammount: {
    fontSize: 14,
    fontWeight: 500,
  },
});
