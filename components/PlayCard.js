import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Footer from "./Footer";
import PlayButton from "./PlayButton";
import { ProgressBar } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";

const PlayCard = ({ item }) => {
  return (
    <View>
      {item?.footer ? (
        <Footer item={item} />
      ) : (
        <View style={styles.playcard}>
          <Image source={item.img} style={styles.playCardImage} />
          <Text style={styles.playcardTitle}>{item.name}</Text>
          <View style={styles.playcardDescriptionContainer}>
            <Text style={styles.playcardNewVideoText}>
              +{item.newVideos} New Videos
            </Text>
            <View style={styles.playcardRatioContainer}>
              <AntDesign name="eyeo" size={12} color="#8C8797" />
              <Text style={styles.playcardRatioText}>
                {item.finished}/{item.total}
              </Text>
            </View>
          </View>
          <View style={{ marginTop: 15 }}>
            <ProgressBar
              progress={parseFloat(item.finished) / parseFloat(item.total)}
              color="#F2BC3D"
              style={styles.playcardProgressBar}
            />
          </View>

          <PlayButton />
        </View>
      )}
    </View>
  );
};

export default PlayCard;

const styles = StyleSheet.create({
  playcardTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 28,
    marginVertical: 10,
  },
  playcard: {
    backgroundColor: "rgba(255,255,255,0.075)",
    borderRadius: 32,
    padding: 20,
    marginVertical: 10,
  },
  playCardImage: {
    width: "100%",
  },
  playcardDescriptionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  playcardNewVideoText: {
    fontSize: 12,
    color: "#645F6D",
  },
  playcardRatioContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  playcardRatioText: {
    color: "#8C8797",
    marginLeft: 5,
  },
  playcardProgressBar: {
    borderRadius: 5,
    backgroundColor: "rgba(255,255,255,0.2)",
  },
});
