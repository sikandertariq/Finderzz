// BusinessDetail.js
import React from "react";
import { View, Text, Button, StyleSheet, Image, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

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
        <Text style={styles.businessDetails}>{business.address}</Text>
        <Text style={styles.businessDetails}>
          Contact Info: {business.phone}
        </Text>
        <Text style={styles.businessDetails}>Ratings: {business.rating}⭐</Text>
        {business.price_range === "$$" ? (
          <Text style={styles.businessDetails}>Price: Mediocre</Text>
        ) : business.price_range === "$$$" ? (
          <Text>Price: Expensive</Text>
        ) : (
          <Text style={styles.businessDetails}>Price: Cheap</Text>
        )}
        <Text style={styles.businessDetails}>Business Highlights:</Text>
        {business.business_highlights.map((highlight, index) => (
          <Text key={index} style={styles.highlight}>
            {highlight}
          </Text>
        ))}
      </View>

      <Button title="Open in Google Maps" onPress={openInGoogleMaps} />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center", // Keep items centered
    paddingBottom: 20,
  },
  businessImage: {
    width: "100%",
    height: 200,
    marginBottom: 10,
  },
  textContainer: {
    width: "100%",
    alignItems: "flex-start", // Align text to the start (left)
    margin: 16,
    gap: 10,
  },
  businessName: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 10,
  },
  businessDetails: {
    fontSize: 17,
    marginBottom: 10,
  },
});
