import React from "react";

import Colors from "../Constants/Colors";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealList from "../Components/MealList";

const CategoryMealsScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return (
    <MealList
      listData={displayedMeals}
      navigation={props.navigation}
      backgroundColor={selectedCategory.color + "3"}
    />
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
