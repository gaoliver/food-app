import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";

// Screens
import CategoriesScreen from "../Screen/CategoriesScreen";
import CategoryMealsScreen from "../Screen/CategoryMealsScreen";
import MealDetailScreen from "../Screen/MealDetailScreen";
import FavoritesScreen from "../Screen/FavoritesScreen";
import FiltersScreen from "../Screen/FiltersScreen";
import HomeScreen from "../Screen/HomeScreen";
import ProfileScreen from "../Screen/ProfileScreen";
import SettingsScreen from "../Screen/SettingsScreen";
import FollowingScreen from "../Screen/FollowingScreen";
import FollowersScreen from "../Screen/FollowersScreen";
import HelpScreen from "../Screen/HelpScreen";

import Colors from "../Constants/Colors";

const defaultStackNavOptions = (navData) => {
  return {
          headerRight: (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                title="Profile"
                iconName="person"
                iconSize={25}
                onPress={() => {
                  navData.navigation.toggleDrawer();
                }}
              />
            </HeaderButtons>
          ),
  }
}

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    "Category Meals": {
      screen: CategoryMealsScreen,
    },
    MealDetail: { screen: MealDetailScreen },
  },
  {
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const HomeNavigator = createStackNavigator(
  {
    "Food App": { screen: HomeScreen },
  },
  {
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const FilterNavigator = createStackNavigator(
    {
        Filters: FiltersScreen
    },
    {
        navigationOptions: {},
        defaultNavigationOptions: defaultStackNavOptions
    }
)

const FavNavigator = createStackNavigator({
  "My favorites": { screen: FavoritesScreen },
  MealDetail: MealDetailScreen,
},
{
    defaultNavigationOptions: defaultStackNavOptions
});

const tabScreenConfig = {
  Home: {
    screen: HomeNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <MaterialIcons name="home-filled" size={25} color={tabInfo.tintColor} />
        );
      },
    },
  },
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="restaurant" size={22} color={tabInfo.tintColor} />
        );
      },
    },
  },
  Filters: {
    screen: FilterNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <MaterialIcons name="search" size={25} color={tabInfo.tintColor} />
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
        labeled: false,
        barStyle: {
          backgroundColor: Colors.primary,
          height: 50,
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


      const FiltersNavigator = createStackNavigator({
        Filters: FiltersScreen
      })



HomeScreen.navigationOptions = {
    headerTitleStyle: {
        fontFamily: 'hipster',
        fontSize: 40
    }
}


const profileNavigator = createDrawerNavigator({
  MealsFav: MealsFavTabNavigator,
  Filters: FiltersNavigator
});
      

export default createAppContainer(profileNavigator);

