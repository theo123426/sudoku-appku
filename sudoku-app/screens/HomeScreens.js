import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet,TouchableOpacity,Dimensions } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { useDispatch } from "react-redux";
import { addBoard } from "../store/actions/AddBoard";
import {Picker} from "@react-native-picker/picker";

const HomeScreens = ({ navigation }) => {
  const dispatch = useDispatch()
  const [selected,setSelected] = useState('')
  const [userName, setUserName] = useState("");
  const [difficulty, setDifficulty] = useState("");

  function getUsername(e) {
    setUserName(e);
  }
  function getDiffuclty(e) {
    setDifficulty(e);
  }
  function registerButtonHandler() {
    if (!userName || !difficulty) {
      alert("Please Input Username and Difficulty");
    } else {
      dispatch(addBoard())
      navigation.navigate("Table", {
        userName,
        difficulty,
      });
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.text}>Username</Text>
        <TextInput
          onChangeText={getUsername}
          value={userName}
          style={styles.textInput}
        />
        <Text style={styles.text}>Difficulty</Text>
        <Picker
        selectedValue={difficulty}
        onValueChange={(itemValue,itemIndex)=> setDifficulty(itemValue)}
        style={styles.pickerStyle}
        >
          <Picker.Item label="Easy" value="easy"/>
          <Picker.Item label="Medium" value="medium"/>
          <Picker.Item label="Hard" value="hard"/>
        </Picker>
        <TouchableOpacity style={styles.button} onPress={registerButtonHandler}>
          <Text style={styles.textButton}>Start Game</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreens;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 100,
  },
  button: {
    alignItems: "center",
    backgroundColor: "blue",
    padding: 10,
    width:'150%',
    marginVertical:30,
    borderRadius:10
  },
  text:{
    color:'black',
    marginVertical:5
  },
  textButton:{
    color:'white',
  },
  textInput:{
    borderWidth:1,
    borderColor:'black',
    width:'150%',
    height:40,
    marginBottom:10,
    backgroundColor:'white',
    borderRadius:10,
    textAlign:'center'
  },
  card:{
    backgroundColor:'aquamarine',
    alignItems: "center",
    borderRadius:10,
    width:Dimensions.get('screen').width * 0.9,
    height:Dimensions.get('screen').height * 0.5,
    padding:70
  },
  pickerStyle:{
    backgroundColor:'grey',
    paddingVertical:10,
    width:250,
  }
});