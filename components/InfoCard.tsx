import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { formatCurrency } from "../utils/formatCurrency";
import { useTheme } from "../theme/ThemeProvider";
import { TAccountData } from "../utils/schemas";

type TProps = {
  account: TAccountData;
};

const InfoCard = ({ account }: TProps) => {
  const { theme } = useTheme();
  const { formattedValue } = formatCurrency(account.availableBalance, "en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 2,
  });

  const isNegativeBalance = account.availableBalance < 0;

  return (
    <View
      style={[
        styles.infoCard,
        {
          backgroundColor: theme.background.secondary,
        },
      ]}
    >
      <View style={styles.infoCardRow}>
        <Text
          style={[
            styles.infoCardName,
            {
              color: theme.text.secondary,
            },
          ]}
        >
          Type of account
        </Text>
        {/* accountType on TAccountData doesn't represent type of account
            represents Account No instead  
        */}
        {/* <Text style={styles.infoCardValue}>{account.accountType}</Text> */}
        <Text
          style={[
            styles.infoCardValue,
            {
              color: theme.text.primary,
            },
          ]}
        >
          Savings
        </Text>
      </View>
      <View style={styles.infoCardRow}>
        <Text
          style={[
            styles.infoCardName,
            {
              color: theme.text.secondary,
            },
          ]}
        >
          Account No
        </Text>
        <Text
          style={[
            styles.infoCardValue,
            {
              color: theme.text.primary,
            },
          ]}
        >
          {account.accountType}
        </Text>
      </View>
      <View style={styles.infoCardRow}>
        <Text
          style={[
            styles.infoCardName,
            {
              color: theme.text.secondary,
            },
          ]}
        >
          Available Balance
        </Text>
        <Text
          style={[
            styles.infoCardValue,
            {
              color: isNegativeBalance
                ? theme.text.primary
                : theme.system.success,
            },
          ]}
        >{`${formattedValue}`}</Text>
      </View>
      <View style={styles.infoCardRow}>
        <Text
          style={[
            styles.infoCardName,
            {
              color: theme.text.secondary,
            },
          ]}
        >
          Date added
        </Text>
        <Text
          style={[
            styles.infoCardValue,
            {
              color: theme.text.primary,
            },
          ]}
        >
          {account.dateAdded}
        </Text>
      </View>
    </View>
  );
};

export default InfoCard;

const styles = StyleSheet.create({
  infoCard: {
    width: "100%",
    borderRadius: 16,
    gap: 16,
    paddingVertical: 24,
    paddingHorizontal: 17,
  },
  infoCardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  infoCardName: {
    fontSize: 14,
    fontWeight: 500,
  },
  infoCardValue: {
    fontSize: 14,
    fontWeight: 500,
    textAlign: "right",
  },
});
