import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CalculatorBMI from "../screens/CalculatorBMI/CalculatorBMI/CalculatorBMI";
import Search from "../screens/search/Search";
import Icon from "react-native-vector-icons/FontAwesome5";
import { colors } from "../constants/colors";
import HomeExercises from "../screens/Home/Home/HomeExercises";
import StackHome from "./StackHome";

const BottomTab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: any;
          if (route.name === "HomeMatchs") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Search") {
            iconName = focused ? "search" : "search";
          } else if (route.name === "IMC") {
            iconName = focused ? "weight" : "weight";
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarShowLabel: true,
        tabBarInactiveTintColor: colors.grey,
        tabBarStyle: {
          backgroundColor: "white",
          borderTopWidth: 0.5,
          borderTopColor: "#b6e4fa",
        },
        headerStyle: {
          backgroundColor: colors.secondary,
        },
      })}
    >
      <BottomTab.Screen
        name="HomeMatchs"
        options={{
          title: "Inicio",
          headerTitle: "Ejercicios en casa",
          headerTitleAlign: "left",
          headerTitleStyle: {
            color: "white",
            fontSize: 18,
          },
          headerStyle: {
            backgroundColor: colors.secondary,
          },
        }}
        component={StackHome}
      />
      <BottomTab.Screen
        options={{
          headerTitle: "Buscador",
          tabBarLabel: "Buscador",
          headerTitleAlign: "left",
          headerTitleStyle: {
            color: "white",
            fontSize: 18,
          },
          headerStyle: {
            backgroundColor: colors.secondary,
          },
        }}
        name="Search"
        component={Search}
      />
      <BottomTab.Screen
        options={{
          headerTitle: "Calculadora IMC",
          headerTitleAlign: "left",
          headerTitleStyle: {
            color: "white",
            fontSize: 18,
          },
          headerStyle: {
            backgroundColor: colors.secondary,
          },
        }}
        name="IMC"
        component={CalculatorBMI}
      />
    </BottomTab.Navigator>
  );
};

export default TabNavigator;
