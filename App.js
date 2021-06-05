import React from "react";
import MainStackNavigator from "./navigation/Navigator";
import { NavigationContainer } from "@react-navigation/native";

function App() {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
}

export default App;
