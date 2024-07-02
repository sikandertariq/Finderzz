import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
//import FetchSearch from "../../apis/Search"; // Make sure this path is correct
// import ShowResults from "../../apis/Data"; // Make sure this path is correct
//import BusinessSearch from "../../apis/BusinessSearch";
import FetchApiInfo from "../../apis/Search";

export default function Tab() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => FetchApiInfo()}>
        <Text>Api Call</Text>
      </TouchableOpacity>
      {/* /* <SafeAreaView>
        <ShowResults />
      </SafeAreaView> */}
      {/* <BusinessSearch /> */}
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
