import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { colors } from "../constants/colors";
import FavoritesExercises from "../screens/Favorites/FavoritesExercises/FavoritesExercises";
import FavoritesIMC from "../screens/Favorites/FavoritesIMC/FavoritesIMC";

const Tab = createMaterialTopTabNavigator();

const TopTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarPressColor: "powderblue",
        tabBarStyle: { backgroundColor: colors.secondary },
        tabBarLabelStyle: { color: "white" },
        tabBarActiveTintColor: "#e91e63",
        tabBarInactiveTintColor: "#123123",
      }}
    >
      <Tab.Screen
        options={{
          title: "Exercicios favoritos",
        }}
        name="FavoritesExercises"
        component={FavoritesExercises}
      />
      <Tab.Screen
        options={{ title: "IMC guardado" }}
        name="FavoritesIMC"
        component={FavoritesIMC}
      />
    </Tab.Navigator>
  );
};

export default TopTabs;
