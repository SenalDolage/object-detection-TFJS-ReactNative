import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { colors, spacing } from "../../theme";
import { Button } from "../../components";

export function HomeScreen() {
  const navigation = useNavigation();
  const blindManPlaceholder = require("./blindman.png");

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <View>
          <Text>Welcome to Object Detection with TensorFlowJS</Text>
        </View>
        <View>
          <Image source={blindManPlaceholder} />
        </View>
        <View style={styles.buttonWrap}>
          <Button
            title="Start Scan"
            onPress={() => navigation.navigate("Camera")}
            style={{marginRight: 5}}
          />
          <Button title="Input Object" onPress={() => navigation.navigate("Test")} />
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
    paddingHorizontal: spacing.medium,
  },

  buttonWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
