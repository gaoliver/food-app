import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'

import Colors from "../Constants/Colors";
import { CATEGORIES } from "../data/dummy-data";

const CategoryMealsScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

  return (
    <View style={styles.screen}>
      <Text style={{ marginBottom: 20 }}>The Category Meal Screen</Text>
      <Button
        title="Meal Detail!"
        onPress={() => {
          props.navigation.navigate("Meal Detail");
        }}
      />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId)
  

  return {
    headerTitle: selectedCategory.title,
    headerStyle: {
      backgroundColor: selectedCategory.color,
    },
    headerTintColor: Colors.TextColor,
  };
};

export default CategoryMealsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
