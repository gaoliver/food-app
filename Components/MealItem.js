import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import Colors from "../Constants/Colors";

const MealItem = (props) => {
  // Gluten Free condition
  if (props.isGlutenFree === true) {
    var glutenFree = (
      <Text style={{ ...styles.isGlutenFree, ...styles.moreDetails }}>
        Gluten Free
      </Text>
    );
  }
  // Vegan condition
  if (props.isVegan === true) {
    var vegan = (
      <Text style={{ ...styles.isVegan, ...styles.moreDetails }}>Vegan</Text>
    );
  }
  // Vegetarian condition
  if (props.isVegetarian === true) {
    var vegetarian = (
      <Text style={{ ...styles.isVegetarian, ...styles.moreDetails }}>vegetarian</Text>
    );
  }
  // Lactose Free condition
  if (props.isLactoseFree === true) {
    var lactoseFree = (
      <Text style={{ ...styles.isLactoseFree, ...styles.moreDetails }}>Lactose Free</Text>
    );
  }

  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        style={{ ...styles.itemButton, backgroundColor: Colors.primary }}
        onPress={props.onSelectMeal}
      >
        <Image style={styles.itemImg} source={{ uri: props.itemImg }}></Image>
        <View style={styles.itemInfo}>
          <Text
            style={{ ...styles.itemTitle, color: Colors.text }}
            numberOfLines={2}
          >
            {props.itemTitle}
          </Text>
          <View style={styles.itemDetails}>
            <Text style={styles.itemDetail}>{props.itemDuration}m</Text>
            <Text style={styles.itemDetail}>{props.itemComplexity}</Text>
            <Text style={styles.itemDetail}>{props.itemAffordability}</Text>
          </View>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ width: "50%" }}>
              {glutenFree}
              {vegan}
            </View>
            <View style={{ width: "50%" }}>
              {vegetarian}
              {lactoseFree}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  itemButton: {
    flexDirection: "row",
    height: 150,
    padding: 7,
    borderRadius: 20,
    overflow: "hidden",
    elevation: 5,
    shadowOffset: { height: 2, width: 2 },
    shadowColor: "#000",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemInfo: {
    width: "47%",
    height: "100%",
  },
  itemImg: {
    width: "50%",
    height: "100%",
    backgroundColor: "#eee",
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  itemTitle: {
    width: "100%",
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 5,
  },
  itemDetails: {
    flex: 1,
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemDetail: {
    fontSize: 12,
    color: "grey",
  },
  moreDetails: {
    fontSize: 10,
    paddingLeft: 8,
    borderLeftWidth: 3,
    marginTop: 2,
  },
  isGlutenFree: {
    color: "purple",
    borderColor: "purple",
  },
  isVegan: {
    color: "green",
    borderColor: "green",
  },
  isVegetarian: {
    color: "#f80",
    borderColor: "#f80",
  },
  isLactoseFree: {
      color: '#55f',
      borderColor: '#55f'
  }
});
