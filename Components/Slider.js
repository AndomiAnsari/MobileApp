import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Slider = (props) => {
  return (
    <View
      style={{
        height: "100%",
        width: "100%",

        // justifyContent: "center",
        // alignItems: "center",
      }}
    >
      <Image
        style={{ height: "50%", width: "100%", resizeMode: "contain" }}
        source={require("../Assets/Images/bg.jpg")}
      />
      <Image
        style={{ height: "50%", width: "100%", resizeMode: "contain" }}
        source={require("../Assets/Images/bg.jpg")}
      />
      {/* <Image
        style={{ height: "50%", width: "100%", resizeMode: "contain" }}
        source={require("../Assets/Images/bg.jpg")}
      />
      <Image
        style={{ height: "50%", width: "100%", resizeMode: "contain" }}
        source={require("../Assets/Images/bg.jpg")}
      /> */}
    </View>
  );
};
export default Slider;
