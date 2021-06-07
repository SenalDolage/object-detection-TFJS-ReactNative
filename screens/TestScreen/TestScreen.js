import React, { useEffect } from "react";

export function TestScreen() {
  useEffect(() => {
    console.log("a test screen");
  }, []);

  return (
    <View style={styles.container}>
      <Text>Test</Text>
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
