import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { CameraScreen, HomeScreen, TestScreen, SearchByItemScreen } from "../screens";

const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Camera" component={CameraScreen} />
      <Stack.Screen name="Test" component={TestScreen} />
      <Stack.Screen name="SearchByItem" component={SearchByItemScreen} />
    </Stack.Navigator>
  );
}

export default MainStackNavigator;
