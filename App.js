import React from "react";
import MainStackNavigator from "./navigation/Navigator";
import { NavigationContainer } from "@react-navigation/native";
import ItemContext from "./context/ItemContext";

function App() {
  return (
    <ItemContext.Provider>
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    </ItemContext.Provider>
  );
}

export default App;
