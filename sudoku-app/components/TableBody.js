import React from "react";
import { StyleSheet, View,Dimensions } from "react-native";
import EachNum from "./EachNum";

export default function TableBody(props) {
  return (
      <View style={styles.sudoku}>
        {props.e.map((el, i) => {
          return <EachNum el={el} i={i} o={props.o} key={i} />;
        })}
      </View>
  );
}

const styles = StyleSheet.create({
  sudoku: {
    flexDirection: "row",
    backgroundColor:'pink',
    width: Dimensions.get('screen').width * 0.9,
  },
  container:{
    flex: 1,
    height: Dimensions.get('screen').height * 0.5,
    
  }
});
