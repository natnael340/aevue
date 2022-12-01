import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";

const Footer = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/va.png")} />
      <Text style={styles.footerText}>
        Check back soon for new clips and creator content
      </Text>
      <Text style={styles.footerTextsmall}>In the mean time learn more</Text>
      <LinearGradient
        colors={["rgba(242,188,61,1)", "rgba(242,188,61,0.1)"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.footerButtonContainer}
      >
        <FontAwesome name="fire" size={24} color="#F2BC3D" />
        <Text style={styles.footerButtonText}>Tap to learn more</Text>
      </LinearGradient>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 30,
  },
  footerText: {
    fontSize: 22,
    color: "center",
    fontWeight: "bold",
    alignSelf: "center",
  },
  footerTextsmall: {
    color: "#A19DAA",
    fontSize: 13,
    marginVertical: 5,
  },
  footerButtonContainer: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    borderRadius: 30,
    marginTop: 20,
  },
  footerButtonText: {
    color: "white",
    fontSize: 17,
    fontWeight: "500",
    marginHorizontal: 5,
  },
});
