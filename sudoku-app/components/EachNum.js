import React, { useState } from "react";
import { View, TextInput, StyleSheet, Dimensions } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addBoard } from "../store/actions/AddBoard";

function EachNum({ el, i, o }) {
  const dispatch = useDispatch();
  const [num, setNum] = useState("");
  const oldBoard = useSelector((state) => state.tableBoard);
  const staticBoard = useSelector(state => state.staticTable)
  function changeNumber(e) {
    if (!isNaN(+e)) {
      if (+e <= 9) {
        setNum(e);
        let editBoard = JSON.parse(JSON.stringify(oldBoard))
        editBoard[o][i] = +e;
        dispatch(addBoard(editBoard))
      }
    } else {
      alert("Input Must be a number");
    }
  }
  return (
    <View style={styles.container}>
        <TextInput
          editable={staticBoard[o][i]  === 0 ? true : false}
          selectTextOnFocus={staticBoard[o][i]  === 0 ? true : false}
          onChangeText={changeNumber}
          value={el === 0 ? num : el.toString()}
          style={[staticBoard[o][i]  === 0 ? styles.eachBox : styles.staticInput,styles.textBox]}
        />
    </View>
  );
}

export default EachNum;

const styles = StyleSheet.create({
  container:{
    flex:1,
    borderWidth:1
  },
  eachBox: {
    textAlign: "center",
    justifyContent:'center',
    backgroundColor:'pink'
  },
  staticInput:{
    textAlign: "center",
    justifyContent:'center',
    backgroundColor:'blue'
  },
  textInput:{
    flex:1,
    textAlign:'center'
  },
  textBox:{
    color:'white'
  }
});
