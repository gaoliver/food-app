import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Categories, { CATEGORIES } from "../data/dummy-data";
import Colors from "../Constants/Colors";
import CategoryGridTile from "../Components/CategoryGridTile";

const CategoriesScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        id={itemData.item.id}
        title={itemData.item.title}
        color={itemData.item.color}
        icon={itemData.item.icon}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "Category Meals",
            params: {
              categoryId: itemData.item.id,
            },
          });
        }}
      />
    );
  };

  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
  );
};

CategoriesScreen.navigationOptions = (navigationData) => {
  return {
    headerStyle: {
      backgroundColor: Colors.primary,
    },
    headerTintColor: Colors.text,
  };
};

export default CategoriesScreen;
