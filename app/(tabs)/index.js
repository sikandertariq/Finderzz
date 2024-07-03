import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
  Modal,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import FetchApiInfo from "../../apis/Search";

export default function Tab() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState("RECOMMENDED");
  const [businesses, setBusinesses] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const searchBusinesses = async () => {
    setLoading(true); // Set loading to true before starting the search
    try {
      const results = await FetchApiInfo(query, location, sortBy);
      setBusinesses(results);
    } catch (error) {
      console.error(error);
    }
    setLoading(false); // Set loading to false after the search is completed
  };

  const renderBusinesses = () => {
    return businesses.map((business, index) => (
      <View key={index} style={styles.businessContainer}>
        <Image source={{ uri: business.photo }} style={styles.businessImage} />
        <View style={styles.businessInfo}>
          <Text style={styles.businessName}>{business.name}</Text>
          <Text style={styles.businessAddress}>{business.address}</Text>
        </View>
      </View>
    ));
  };

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.inner}
      scrollEnabled={true}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Query"
            value={query}
            onChangeText={setQuery}
          />
          <TextInput
            style={styles.input}
            placeholder="Location"
            value={location}
            onChangeText={setLocation}
          />
        </View>
      </TouchableWithoutFeedback>
      <TouchableOpacity
        style={styles.dropdownButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.dropdownButtonText}>Sort By: {sortBy}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={searchBusinesses}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
      <View style={styles.scrollViewContainer}>
        <ScrollView horizontal contentContainerStyle={styles.scrollView}>
          {renderBusinesses()}
        </ScrollView>
      </View>
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Picker
              selectedValue={sortBy}
              style={styles.picker}
              onValueChange={(itemValue) => setSortBy(itemValue)}
            >
              <Picker.Item label="Recommended" value="RECOMMENDED" />
              <Picker.Item label="Highest Rated" value="HIGHEST_RATED" />
              <Picker.Item label="Review Count" value="REVIEW_COUNT" />
            </Picker>
            <Button title="Done" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
      <Modal visible={loading} transparent={true} animationType="none">
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#007BFF" />
        </View>
      </Modal>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  inner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    width: "100%",
  },
  formContainer: {
    width: "100%",
    alignItems: "center",
  },
  input: {
    width: "90%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  dropdownButton: {
    width: "90%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#fff",
    justifyContent: "center",
    marginBottom: 10,
  },
  dropdownButtonText: {
    fontSize: 16,
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    width: "90%",
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  scrollViewContainer: {
    height: 200,
    width: "100%", // Ensure it takes the full width
  },
  scrollView: {
    flexDirection: "row",
    paddingVertical: 10,
  },
  businessContainer: {
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    width: 200,
    backgroundColor: "#fff",
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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
  picker: {
    width: "100%",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
});
