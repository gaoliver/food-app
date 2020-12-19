import React, { useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import Colors from "../Constants/Colors";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import CustomHeaderButton from "../Components/HeaderButton";

const MealDetailScreen = (props) => {
  const mealId = props.navigation.getParam("mealId");

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  // Gluten Free condition
  if (selectedMeal.isGlutenFree === true) {
    var glutenFree = (
      <Text style={{ ...styles.isGlutenFree, ...styles.moreDetails }}>
        Gluten Free
      </Text>
    );
  }
  // Vegan condition
  if (selectedMeal.isVegan === true) {
    var vegan = (
      <Text style={{ ...styles.isVegan, ...styles.moreDetails }}>Vegan</Text>
    );
  }
  // Vegetarian condition
  if (selectedMeal.isVegetarian === true) {
    var vegetarian = (
      <Text style={{ ...styles.isVegetarian, ...styles.moreDetails }}>
        vegetarian
      </Text>
    );
  }
  // Lactose Free condition
  if (selectedMeal.isLactoseFree === true) {
    var lactoseFree = (
      <Text style={{ ...styles.isLactoseFree, ...styles.moreDetails }}>
        Lactose Free
      </Text>
    );
  }

  const ingredientList = (itemData) => {
    return <Text style={{ ...styles.list }}>{itemData.item}</Text>;
  };

  return (
    <>
      <Image
        style={{ ...styles.image }}
        source={{ uri: selectedMeal.imageUrl }}
      />
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          position: "absolute",
          zIndex: 10,
        }}
      >
        <View style={styles.screen}>
          {/* HEADER */}
          <Text style={{ ...styles.title }}>{selectedMeal.title}</Text>
          {/* DETAILS */}
          <View style={styles.itemDetails}>
            <Text style={styles.itemDetail}>{selectedMeal.duration}m</Text>
            <Text style={styles.itemDetail}>|</Text>
            <Text style={styles.itemDetail}>{selectedMeal.complexity}</Text>
            <Text style={styles.itemDetail}>|</Text>
            <Text style={styles.itemDetail}>{selectedMeal.affordability}</Text>
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginVertical: 10,
            }}
          >
            {glutenFree}
            {vegan}
            {vegetarian}
            {lactoseFree}
          </View>
          {/* INGREDIENTS */}
          <Text style={{ ...styles.sectionTitle }}>Ingredients</Text>
          <FlatList
            style={{ ...styles.listStyle }}
            data={selectedMeal.ingredients}
            renderItem={ingredientList}
          />
          {/* STEPS */}
          <Text style={{ ...styles.sectionTitle }}>Steps</Text>
          <FlatList
            style={{ ...styles.listStyle }}
            data={selectedMeal.steps}
            renderItem={ingredientList}
          />
          {/* BACK BUTTON */}
          <View style={{ marginTop: 50 }}>
            <Button
              title="Back to Categories"
              onPress={() => {
                props.navigation.popToTop();
              }}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  //   if (selectedCategory.dark === true) {
  //     var textColor = "white";
  //   } else {
  //     var textColor = "black";
  //   }

  const textColor = Colors.text;

  return {
    headerTitle: "Recipe",
    // headerStyle: {
    //   backgroundColor: selectedCategory.color,
    // },
    headerTintColor: textColor,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title="Favorite" iconName="favorite-outline" onPress={() => {}} />
      </HeaderButtons>
    ),
  };
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    alignItems: "center",
    paddingBottom: 100,
    paddingHorizontal: 10,
    marginTop: 200,
    backgroundColor: Colors.contentBackground,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  title: {
    width: "100%",
    paddingTop: 10,
    paddingBottom: 20,
    fontSize: 22,
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: 230,
    position: "absolute",
  },
  itemDetails: {
    width: "60%",
    flexDirection: "row",
    justifyContent: "space-around",
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
    color: "#55f",
    borderColor: "#55f",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 50,
  },
  listStyle: {
    marginTop: 10,
    width: "100%",
    flexGrow: 0,
  },
  list: {
    textAlign: "center",
    marginVertical: 5,
  },
});
