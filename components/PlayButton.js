import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const PlayButton = () => {
  return (
    <View style={styles.container}>
      <FontAwesome name="play" size={18} color="white" />
    </View>
  );
};

export default PlayButton;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 84,
    right: 40,
    width: 64,
    height: 64,
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});
