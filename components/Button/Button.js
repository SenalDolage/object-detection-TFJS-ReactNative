import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import { colors, spacing } from "../../theme";

export function Button(props) {
  const { onPress, title, style } = props;
  return (
    <Pressable style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: spacing.medium,
    paddingHorizontal: spacing.large,
    borderRadius: 100,
    backgroundColor: colors.green,
  },

  text: {
    fontSize: 15,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: colors.white,
  },
});
