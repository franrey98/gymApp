import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CalculatorBMI from "../screens/CalculatorBMI/CalculatorBMI/CalculatorBMI";
import Search from "../screens/search/Search";
import TabsTopHome from "../screens/Home/TabsTopHome";
import Icon from "react-native-vector-icons/FontAwesome5";
import { colors } from "../constants/colors";

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
        tabBarShowLabel: false,
        tabBarInactiveTintColor: colors.secondary,
        tabBarStyle: {
          backgroundColor: colors.primaryTransparent,
          borderTopWidth: 1,
          borderTopColor: colors.primaryTransparent,
        },
      })}
    >
      <BottomTab.Screen
        name="HomeMatchs"
        options={{
          headerTitle: "Ejercicios en casa".toUpperCase(),
          headerTitleStyle: {
            color: "white",
            fontSize: 18,
          },
          headerStyle: {
            backgroundColor: "#2e68b3",
          },
        }}
        component={TabsTopHome}
      />
      <BottomTab.Screen
        options={{ headerTitle: "Buscador", tabBarLabel: "Buscador" }}
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
