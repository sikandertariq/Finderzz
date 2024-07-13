import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../HomeScreen"; // Update the import path
import BusinessDetail from "../BusinessDetail";

const Stack = createStackNavigator();

export default function Tab() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BusinessDetail"
          component={BusinessDetail}
          options={{ headerTitle: "Details" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
