import { createStackNavigator } from "@react-navigation/stack";
import HomeExercises from "../screens/Home/HomeExercises";
import CategorieScreen from "../screens/Home/CategorieScreen/CategorieScreen";
import CardsMuscles from "../screens/Home/CardsMuscles/CardsMuscles";
import RenderCards from "../screens/Home/CardsMuscles/RenderCards";
import Exercises from "../screens/Home/Exercises/Exercises";

const Stack = createStackNavigator();

const StackHome = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeExercises} />
      <Stack.Screen name="CategorieScreen" component={CategorieScreen} />
    </Stack.Navigator>
  );
};

export default StackHome;
