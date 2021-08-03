import React from "react";
import { StyleSheet, View } from "react-native";
import TableSudoku from "./components/TableSudoku";
import { Provider } from "react-redux";
import store from "./store";
import HomeScreens from "./screens/HomeScreens";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import FinishScreen from "./screens/FinishScreen";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreens} />
          <Stack.Screen name="Table" component={TableSudoku} />
          <Stack.Screen name="Finish" component={FinishScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: 100,
  },
});
