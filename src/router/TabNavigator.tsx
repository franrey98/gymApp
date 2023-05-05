import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CalculatorBMI from "../screens/CalculatorBMI/CalculatorBMI/CalculatorBMI";
import Icon from "react-native-vector-icons/FontAwesome5";
import { colors } from "../constants/colors";
import StackHome from "./StackHome";
import Discover from "../screens/search/Discover";
import LinearGradientApp from "../components/LinearGradientApp";

const BottomTab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: any;
          if (route.name === "HomeMatchs") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Discover") {
            iconName = focused ? "compass" : "compass";
          } else if (route.name === "IMC") {
            iconName = focused ? "weight" : "weight";
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarShowLabel: true,
        tabBarInactiveTintColor: colors.grey,
        tabBarStyle: {
          backgroundColor: "white",
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
          headerTitle: "Ejercicios".toUpperCase(),
          headerTitleAlign: "left",
          headerStatusBarHeight: 10,
          headerShown: false,
          headerTitleStyle: {
            color: "white",
            fontSize: 20,
            height: "100%",
          },
          headerStyle: {
            backgroundColor: colors.secondary,
          },
        }}
        component={StackHome}
      />
      <BottomTab.Screen
        options={{
          headerTitle: "Descubre",
          tabBarLabel: "Descubre",
          headerTitleAlign: "left",
          headerTitleStyle: {
            color: "white",
            fontSize: 18,
          },
          headerStyle: {
            backgroundColor: colors.secondary,
          },
        }}
        name="Discover"
        component={Discover}
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
