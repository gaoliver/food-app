import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import CategoriesScreen from "../Screen/CategoriesScreen";
import CategoryMealsScreen from "../Screen/CategoryMealsScreen";
import MealDetailScreen from "../Screen/MealDetailScreen";
import FavoritesScreen from "../Screen/FavoritesScreen";
import ProfileScreen from "../Screen/ProfileScreen";
import SettingsScreen from "../Screen/SettingsScreen";
import FollowingScreen from "../Screen/FollowingScreen";
import FollowersScreen from "../Screen/FollowersScreen";
import HelpScreen from "../Screen/HelpScreen";

import Colors from "../Constants/Colors";

const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  "Category Meals": {
    screen: CategoryMealsScreen,
    navigationOptions: {},
  },
  MealDetail: MealDetailScreen,
});

const FavNavigator = createStackNavigator({
  "My favorites": {screen: FavoritesScreen},
  "Meal detail": MealDetailScreen,
});

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
    },
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <MaterialIcons name="favorite" size={25} color={tabInfo.tintColor} />
        );
      },
    },
  },
};

const MealsFavTabNavigator =
  Platform.OS == "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: Colors.text,
        shifting: true,
        labeled: true,
        barStyle: {
          backgroundColor: Colors.primary,
        },
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: Colors.text,
          style: {
            paddingTop: 5,
            paddingBottom: 5,
            backgroundColor: Colors.primary,
          },
          showLabel: false,
        },
      });

export default createAppContainer(MealsFavTabNavigator);
