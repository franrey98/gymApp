import { createStackNavigator } from "@react-navigation/stack";
import HomeExercises from "../screens/Home/Home/HomeExercises";
import CategorieScreen from "../screens/Home/CategorieScreen/CategorieScreen";
import { colors } from "../constants/colors";
import { Platform } from "react-native";

const Stack = createStackNavigator();

const StackHome = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        options={{
          headerTitle: "Ejercicios".toUpperCase(),
          headerTitleAlign: "left",
          headerShown: true,
          headerTitleStyle: {
            color: "white",
            fontSize: 18,
          },
          headerStyle: {
            backgroundColor: colors.secondary,
          },
        }}
        name="Home"
        component={HomeExercises}
      />
      <Stack.Screen
        name="CategorieScreen"
        options={{
          headerShown: true,
          headerTitleStyle: {
            color: "white",
            fontSize: 18,
          },
          headerStyle: {
            backgroundColor: colors.secondary,
          },
          headerTintColor: "white",
          headerTitle: Platform.OS === "android" ? "Volver" : "",
          headerBackTitle: "Volver",
        }}
        component={CategorieScreen}
      />
    </Stack.Navigator>
  );
};

export default StackHome;
