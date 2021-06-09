import React from "react";
import PropTypes from "prop-types";
import { Text, StyleSheet, Pressable } from "react-native";
import { colors, spacing } from "../../theme";

export function Button({ onPress, title = "Button", style, type }) {
  return (
    <>
      {type === "dark" ? (
        <Pressable
          style={[styles.button, styles.buttonDark, style]}
          onPress={onPress}
        >
          <Text style={[styles.text, styles.buttonDarkText]}>{title}</Text>
        </Pressable>
      ) : (
        <Pressable
          style={[styles.button, styles.buttonLight, style]}
          onPress={onPress}
        >
          <Text style={[styles.text, styles.buttonLightText]}>{title}</Text>
        </Pressable>
      )}
    </>
  );
}

Button.propTypes = {
  title: PropTypes.string,
  style: PropTypes.shape({}),
  type: PropTypes.string,
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: spacing.medium,
    paddingHorizontal: spacing.large,
    borderRadius: 100,
    width: "100%",

    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 10,
  },

  text: {
    fontSize: 15,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
  },

  buttonDark: {
    backgroundColor: colors.green,
  },

  buttonDarkText: {
    color: colors.white,
  },

  buttonLight: {
    backgroundColor: colors.white,
  },

  buttonLightText: {
    color: colors.green,
  },
});
