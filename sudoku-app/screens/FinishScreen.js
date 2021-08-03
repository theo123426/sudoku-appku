import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { useDispatch } from "react-redux";
import WinnerBoard from "../components/WinnerBoard";
import { addBoard } from "../store/actions/AddBoard";
const FinishScreen = ({ route, navigation }) => {
  console.log(route, "<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
  const dispatch = useDispatch();

  function backToHomeHandler() {
    dispatch(addBoard([]));
    navigation.navigate("Home");
  }
  return (
    <View style={styles.container}>
      <View style={styles.rowTable}>
        <Text>Name</Text>
        <Text>Difficulty</Text>
        <Text>Time Left</Text>
      </View>
      <WinnerBoard />
      <TouchableOpacity style={styles.button} onPress={backToHomeHandler}>
        <Text style={styles.textButton}>Back To Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FinishScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "aquamarine",
  },
  button: {
    alignItems: "center",
    backgroundColor: "blue",
    padding: 10,
    width: "90%",
    marginVertical: 30,
    marginLeft: 20,
    borderRadius: 10,
  },
  text: {
    color: "black",
    marginVertical: 5,
  },
  textButton: {
    color: "white",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "black",
    width: "150%",
    height: 40,
    marginBottom: 10,
    backgroundColor: "white",
    borderRadius: 10,
    textAlign: "center",
  },
  card: {
    backgroundColor: "aquamarine",
    alignItems: "center",
    borderRadius: 10,
    width: Dimensions.get("screen").width * 0.9,
    height: Dimensions.get("screen").height * 0.5,
    padding: 70,
  },
  image: {
    width: "50%",
    height: "50%",
  },
  rowTable: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 15,
    width: Dimensions.get("screen").width * 0.9,
    height: Dimensions.get("screen").height * 0.05,
    borderBottomWidth:3,
  },
});
