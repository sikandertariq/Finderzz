import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import FetchApiInfo from "../../apis/Search"; // Adjust the path as per your project structure

const Tab = () => {
  const [businesses, setBusinesses] = useState([]);

  const fetchBusinessInfo = async () => {
    try {
      const data = await FetchApiInfo(); // Fetch data from the API
      if (data && data.data) {
        setBusinesses(data.data); // Set businesses state with fetched data
      } else {
        console.log("No data found.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const renderBusinesses = () => {
    return businesses.map((business, index) => (
      <TouchableOpacity
        key={index}
        style={styles.businessContainer}
        onPress={() => console.log("Business clicked:", business.name)}
      >
        <Image
          source={{ uri: business.photo }} // Assuming business has a photo property
          style={styles.businessImage}
        />
        <View style={styles.businessInfo}>
          <Text style={styles.businessName}>{business.name}</Text>
          <Text style={styles.businessAddress}>{business.address}</Text>
        </View>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={fetchBusinessInfo}>
        <Text>Fetch Businesses</Text>
      </TouchableOpacity>
      <ScrollView horizontal={true} style={styles.scrollView}>
        {renderBusinesses()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
  },
  button: {
    backgroundColor: "lightblue",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  scrollView: {
    flexDirection: "row",
  },
  businessContainer: {
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    width: 200,
    height: 200,
  },
  businessImage: {
    width: "100%",
    height: 100,
    borderRadius: 10,
    marginBottom: 5,
  },
  businessInfo: {
    flex: 1,
  },
  businessName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  businessAddress: {
    fontSize: 14,
    color: "#888",
  },
});

export default Tab;
