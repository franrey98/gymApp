import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeExercises from "./HomeExercises";
import Search from "../search/Search";

const TopTab = createMaterialTopTabNavigator();

const TabsTopHome = () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen
        options={{ title: "Recomendaciones" }}
        name="HomeExercises"
        component={HomeExercises}
      />
    </TopTab.Navigator>
  );
};

export default TabsTopHome;
