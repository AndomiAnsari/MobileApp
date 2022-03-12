import React from "react";
import { View, Text } from "react-native";
import MainHeader from "../../Components/MainHeader";
import { useSelector } from "react-redux";
import Slider from "../../Components/Slider";
const HomeScreen = (props) => {
  const allCategories = useSelector((state) => state.product.allCategories);

  return (
    <View style={{ height: "100%", width: "100%", backgroundColor: "white" }}>
      <MainHeader onCart={() => props.navigation.navigate("cartScreen")} />
      <Slider />
    </View>
  );
};
export default HomeScreen;
