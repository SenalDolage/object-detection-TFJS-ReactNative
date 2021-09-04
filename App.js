import React, { useState } from "react";
import MainStackNavigator from "./navigation/Navigator";
import { NavigationContainer } from "@react-navigation/native";
import SearchItemContext from "./context/ItemContext";

function App() {
  const [item, setItem] = useState("");
  const value = { item, setItem };

  return (
    <SearchItemContext.Provider value={value}>
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    </SearchItemContext.Provider>
  );
}

export default App;
