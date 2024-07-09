// BusinessDetail.js
import React from "react";
import { View, Text, Button, StyleSheet, Image, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

export default function BusinessDetail({ route }) {
  const navigation = useNavigation();
  const { business } = route.params;
  const openInGoogleMaps = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${business.latitude},${business.longitude}`;
    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          Linking.openURL(url);
        } else {
          Alert.alert("Error", "Unable to open Google Maps");
        }
      })
      .catch((err) => console.error("An error occurred", err));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: business.photo }} style={styles.businessImage} />
      <View style={styles.textContainer}>
        <Text style={styles.businessName}>{business.name}</Text>
      </View>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <Button title="Open in Google Maps" onPress={openInGoogleMaps} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center", // Keep items centered
    //padding: 16,
  },
  businessImage: {
    width: "100%",
    height: "30%",
    marginBottom: 10,
  },
  textContainer: {
    width: "100%",
    alignItems: "flex-start", // Align text to the start (left)
  },
  businessName: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
