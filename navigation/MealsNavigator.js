import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'

import CategoriesScreen from '../Screen/CategoriesScreen'
import CategoryMealsScreen from '../Screen/CategoryMealsScreen'
import MealDetailScreen from '../Screen/MealDetailScreen'

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    'Category Meals': {
        screen: CategoryMealsScreen,
        navigationOptions: {}
    },
    'Meal Detail': MealDetailScreen
},
)

export default createAppContainer(MealsNavigator)