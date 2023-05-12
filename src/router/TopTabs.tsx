import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Favorites from "../screens/Favorites/FavoritesExercises/FavoritesExercises";
import FavoritesIMC from "../screens/Favorites/FavoritesIMC/FavoritesIMC";

const Tab = createMaterialTopTabNavigator();

const TopTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="FavoritesExercises" component={Favorites} />
      <Tab.Screen name="FavoritesIMC" component={FavoritesIMC} />
    </Tab.Navigator>
  );
};

export default TopTabs;
