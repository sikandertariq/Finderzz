import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import FetchSearch from "../../apis/Search"; // Make sure this path is correct

export default function Tab() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => FetchSearch()}>
        <Text>Api Call</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "lightblue",
    padding: 10,
    borderRadius: 5,
  },
});
