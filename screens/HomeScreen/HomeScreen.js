import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { colors, spacing } from "../../theme";
import { Button } from "../../components";

export function HomeScreen() {
  const navigation = useNavigation();
  const homeImage = require("./home-image.png");

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <StatusBar style="dark" />
        <View style={styles.welcomingTextWrap}>
          <Text style={styles.welcomeToText}>Welcome to</Text>
          <Text style={styles.welcomeSubText}>
            Object Detection with TensorFlowJS
          </Text>
        </View>
        <View>
          <Image source={homeImage} />
        </View>
        <View style={styles.buttonWrap}>
          <Button
            title="Start Scan"
            type="dark"
            style={{ marginBottom: spacing.large }}
            onPress={() => navigation.navigate("Camera")}
          />
          <Button
            title="Input Object"
            type="light"
            onPress={() => navigation.navigate("SearchByItem")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: spacing.large,
    paddingHorizontal: spacing.large,
  },

  welcomingTextWrap: {
    alignItems: "center",
  },

  welcomeToText: {
    marginBottom: spacing.small,
    fontSize: 24,
    color: colors.green,
  },

  welcomeSubText: {
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
  },

  buttonWrap: {
    width: "90%",
  },
});
