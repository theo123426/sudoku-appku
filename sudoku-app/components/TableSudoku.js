import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Animated } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { fetchTable } from "../store/actions/AddBoard";
import TableBody from "./TableBody";
import { validateData } from "../store/actions/NewBoard";
import { solveData } from "../store/actions/NewBoard";
import { winner } from "../store/actions/TableBoard";

export default function TableSudoku({ route, navigation }) {
  const dispatch = useDispatch();
  const [second,setSecond] = useState(300)
  const staticBoard = useSelector(state=>state.staticTable)
  const oldTable = useSelector(state => state.tableBoard)
  function submitHandler() {
    if (oldTable.length > 0) {
      let dataValidate = {
        board: oldTable,
      };
      dispatch(validateData(dataValidate)).then(data=>{
        let dataWinner  = {
          username: route.params.userName,
          difficulty: route.params.difficulty,
          time:second
        }
        if (data === "solved") {
          stopTimer()
          dispatch(winner(dataWinner))
          navigation.navigate("Finish", {
            username: route.params.userName,
            difficulty: route.params.difficulty,
            time:second
          });
        }
      })
    } else {
      alert("isi dulu kang");
    }
  }
  function ChangeTime(second){
    const minutes = Math.floor(second / 60)
    const seconds = second % 60
    return `${minutes}:${seconds}`
  }

  function solveHandler() {
      let dataSolved = {
        board: staticBoard,
      };
      console.log(dataSolved);
      dispatch(solveData(dataSolved));
  }

    let waktu;
  function timer() {
    if (second>0) {
      waktu =  setTimeout(()=>setSecond(second-1),1000);
    }else{
      alert('Waktu Habis')
    }
  }
  function stopTimer() {
    return clearTimeout(waktu)
  }
  useEffect(() => {
    if (route.params.difficulty) {
      dispatch(fetchTable(route.params.difficulty));
    }
  }, [dispatch]);


  useEffect(()=>{
    if(oldTable){
      timer()
    }
  })
  return (
    <>
    <View style={styles.container}>
      <Text style={styles.timer}>{ChangeTime(second)}</Text>
      {oldTable?.map((e, index) => {
        return <TableBody key={index} e={e} o={index} />;
      })}
      <View style={styles.buttonGroup}>
      <TouchableOpacity style={styles.button} onPress={submitHandler}>
          <Text style={styles.textButton}>Validate</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={solveHandler}>
          <Text style={styles.textButton}>Solve</Text>
        </TouchableOpacity>
      </View>
    </View>
</>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonGroup: {
    flexDirection:'row',
    alignContent:"space-between",
    marginHorizontal:5
  },
  button:{
    alignItems: "center",
    backgroundColor: "blue",
    padding: 10,
    width:200,
    marginVertical:25,
    marginHorizontal:7,
    borderRadius:10
  },
  textButton:{
    color:'white',
  },
  timer:{
    padding:10,
    borderRadius:999999,
    backgroundColor:'blue',
    marginBottom:5
  }
});
