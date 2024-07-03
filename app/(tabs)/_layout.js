import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

export default function TabLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "white",
          tabBarStyle: styles.tabBar,
          headerStyle: styles.header,
          headerTintColor: "#fff",
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Finderz",
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name="home" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: "Settings",
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name="cog" color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#181840",
    borderTopWidth: 0,
    shadowColor: "transparent", // Removes shadow on iOS
    elevation: 0, // Removes shadow on Android
  },
  header: {
    backgroundColor: "#181840",
    borderBottomWidth: 0,
    shadowColor: "transparent", // Removes shadow on iOS
    elevation: 0, // Removes shadow on Android
  },
});
