import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CalculatorBMI from "../screens/CalculatorBMI/CalculatorBMI/CalculatorBMI";
import Icon from "react-native-vector-icons/FontAwesome5";
import { colors } from "../constants/colors";
import StackHome from "./StackHome";
import TopTabs from "./TopTabs";

const BottomTab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: any;
          if (route.name === "Homepage") {
            iconName = focused ? "dumbbell" : "dumbbell";
          } else if (route.name === "TopTabs") {
            iconName = focused ? "star" : "star";
          } else if (route.name === "BMI") {
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
        name="Homepage"
        options={{
          headerShown: false,
          tabBarLabel: "Exercises",
        }}
        component={StackHome}
      />
      <BottomTab.Screen
        options={{
          headerTitle: "My Favorites".toUpperCase(),
          tabBarLabel: "Favorites",
          headerTitleAlign: "left",
          headerTitleStyle: {
            color: "white",
            fontSize: 18,
          },
          headerStyle: {
            backgroundColor: colors.secondary,
          },
        }}
        name="TopTabs"
        component={TopTabs}
      />
      <BottomTab.Screen
        options={{
          headerTitle: "Calculator BMI".toUpperCase(),

          tabBarLabel: "BMI",
          headerTitleAlign: "left",
          headerTitleStyle: {
            color: "white",
            fontSize: 18,
          },
          headerStyle: {
            backgroundColor: colors.secondary,
          },
        }}
        name="BMI"
        component={CalculatorBMI}
      />
    </BottomTab.Navigator>
  );
};

export default TabNavigator;
