import React from "react";
import { ActivityIndicator, StyleSheet, View, Text } from "react-native";
import { Button } from "../../components";
import { spacing, colors } from "../../theme";
import ItemContext from "./context/ItemContext";

export function TestScreen() {
  const context = useContext(ItemContext);
  return (
    <View style={styles.container}>
      <Text>{context}</Text>
      <Text style={{ marginBottom: spacing.large }}>Testing Common Items</Text>
      <ActivityIndicator
        size="large"
        color={colors.green}
        style={{ marginBottom: spacing.large }}
      />
      <Button
        title="Dark Button"
        type="dark"
        style={{ marginBottom: spacing.large }}
      />
      <Button title="Light Button" type="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    padding: spacing.medium,
  },
});
