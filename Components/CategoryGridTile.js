import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Colors from "../Constants/Colors";

const CategoryGridTile = (props) => {
  return (
    <TouchableOpacity style={styles.gridItemOut} onPress={props.onSelect}>
      <View style={{ ...styles.gridItem, backgroundColor: props.color }}>
        <MaterialCommunityIcons
          name={props.icon}
          size={50}
          color={Colors.TextColor}
        />
        <Text style={styles.gridItemTitle}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  gridItemTitle: {
    fontSize: 24,
    color: "white",
    textAlign: "center",
    fontFamily: 'bellfort'
  },
  gridItemOut: {
    flex: 1,
    width: Dimensions.get("window").width / 2.21,
    height: Dimensions.get("window").height / 6.3,
    borderRadius: 30,
    margin: 10,
    elevation: 3,
    shadowOffset: {height: 2, width: 2},
    shadowColor: '#000',
    overflow: 'hidden'
  },
});
