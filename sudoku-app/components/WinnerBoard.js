import React from 'react'
import { View, Text,StyleSheet,Dimensions } from 'react-native'
import { useSelector } from 'react-redux'

const WinnerBoard = () => {
  const winner = useSelector(state => state.winnerBoard)
  console.log(winner);

  function setTime(times){
    let minute = Math.floor(times / 60);
    let second = times % 60;
    return `${minute}:${second}`
  }

  return (
    <>
    {
      winner.map((e,i) =>(
      <View style={styles.rowTable}>
        <Text>{e.username}</Text>
        <Text>{e.difficulty}</Text>
        <Text>{setTime(e.time)}</Text>
      </View>
      ))
    }
    </>
  )
}

export default WinnerBoard

const styles = StyleSheet.create({
  rowTable:{
    flexDirection:'row',
    justifyContent:"space-between",
    marginLeft:15,
    width:Dimensions.get('screen').width * 0.9,
    marginTop:20
  }
})