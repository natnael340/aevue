import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-community/masked-view";
import PlayCard from "../components/PlayCard";
import data from "../constants/data";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <MaskedView
          style={styles.titleView}
          maskElement={<Text style={styles.title}>Trending Today</Text>}
        >
          <LinearGradient
            colors={["#F2BC3D", "#D93636"]}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 1 }}
            style={styles.titleStyle}
          />
        </MaskedView>
      </View>
      <FlatList
        contentContainerStyle={styles.playcardContainer}
        data={data}
        keyExtractor={(item, i) => item.id}
        renderItem={({ item }) => <PlayCard item={item} />}
        ListFooterComponent={<Footer />}
      />
      <Text>Hello</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  titleView: {
    height: 42,
  },
  titleContainer: {
    padding: 10,
  },
  titleStyle: {
    flex: 1,
  },
  playcardContainer: {
    paddingHorizontal: 15,
  },
});
