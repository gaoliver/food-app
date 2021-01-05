import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import MealItem from './MealItem'

const MealList = (props) => {
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
            routeName: "MealDetail",
            params: {
              mealId: itemData.item.id,
            },
          });
        }}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        renderItem={renderMealItem}
        style={{
          flex: 1,
          width: "100%",
          paddingTop: 10,
          backgroundColor: props.backgroundColor,
        }}
      />
    </View>
  );
};

export default MealList;

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
