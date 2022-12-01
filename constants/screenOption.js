import { Feather, FontAwesome } from "@expo/vector-icons";
import { Image, Text } from "react-native";

export default ScreenOption = ({ route }) => ({
  headerShown: false,
  tabBarStyle: { backgroundColor: "#000000", height: 50, borderTopWidth: 0 },
  tabBarIcon: ({ focused, color, size }) => {
    let icon;
    if (route.name === "Home") {
      icon = (
        <FontAwesome
          name="fire"
          size={24}
          color={focused ? "#F2BC3D" : "rgba(167,167,167,0.35)"}
        />
      );
    } else if (route.name === "Discover") {
      icon = (
        <Feather
          name="compass"
          size={24}
          color={focused ? "#F2BC3D" : "rgba(167,167,167,0.35)"}
        />
      );
    } else if (route.name === "Watch") {
      icon = <Image source={require("../assets/Tabb.png")} />;
    } else if (route.name == "Inbox") {
      icon = <Image source={require("../assets/inbox.png")} />;
    } else icon = <Image source={require("../assets/img.png")} />;

    return icon;
  },
  tabBarLabel: ({ focused, color }) => {
    if (focused) return <Text style={{ color: "#F2BC3D" }}>{route.name}</Text>;
    return <Text></Text>;
  },
});
