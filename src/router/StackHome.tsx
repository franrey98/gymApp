import { createStackNavigator } from "@react-navigation/stack";
import HomeExercises from "../screens/Home/Home/HomeExercises";
import CategorieScreen from "../screens/Home/CategorieScreen/CategorieScreen";

const Stack = createStackNavigator();

const StackHome = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        options={{ headerStyle: { height: 0 } }}
        name="Home"
        component={HomeExercises}
      />
      <Stack.Screen name="CategorieScreen" component={CategorieScreen} />
    </Stack.Navigator>
  );
};

export default StackHome;
