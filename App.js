import React from "react";
import MainStackNavigator from "./navigation/Navigator";
import AppStateProvider from "./context/contextProvider";
import { NavigationContainer } from "@react-navigation/native";

function App() {
  return (
    <AppStateProvider>
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    </AppStateProvider>

  );
}

export default App;
