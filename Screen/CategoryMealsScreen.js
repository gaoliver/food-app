import React from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Colors from "../Constants/Colors";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../Components/MealItem";

const CategoryMealsScreen = (props) => {
  const renderMealItem = (itemData) => {
    return (
      <MealItem
        itemTitle={itemData.item.title}
        itemDuration={itemData.item.duration}
        itemComplexity={itemData.item.complexity}
        itemAffordability={itemData.item.affordability}
        itemImg={itemData.item.imageUrl}
        isGlutenFree={itemData.item.isGlutenFree}
        isVegan={itemData.item.isVegan}
        isVegetarian={itemData.item.isVegetarian}
        isLactoseFree={itemData.item.isLactoseFree}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: "Meal Detail",
            params: {
              mealId: itemData.item.id,
            },
          });
        }}
      />
    );
  };

  const catId = props.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        renderItem={renderMealItem}
        style={{ flex: 1, width: "100%", paddingTop: 10, backgroundColor: selectedCategory.color + '3' }}
      />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  if (selectedCategory.dark === true) {
    var textColor = "white";
  } else {
    var textColor = "black";
  }

  return {
    headerTitle: selectedCategory.title,
    headerStyle: {
      // backgroundColor: selectedCategory.color,
      backgroundColor: Colors.primary,
    },
    // headerTintColor: textColor,
    headerTintColor: selectedCategory.color,
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
