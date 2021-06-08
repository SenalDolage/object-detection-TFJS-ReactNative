import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

export function TestScreen() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#11AEBA" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
