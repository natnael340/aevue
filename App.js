import { StyleSheet, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import Temp from "./screens/Temp";
import { FontAwesome } from "@expo/vector-icons";
import screenOption from "./constants/screenOption";
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Tab.Navigator screenOptions={screenOption}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Discover" component={Temp} />
          <Tab.Screen name="Watch" component={Temp} />
          <Tab.Screen name="Inbox" component={Temp} />
          <Tab.Screen name="Profile" component={Temp} />
        </Tab.Navigator>
      </View>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
