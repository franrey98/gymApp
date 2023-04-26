import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CalculatorBMI from "../screens/CalculatorBMI";
import Search from "../screens/Search";
import TabsTopHome from "../screens/Home/TabsTopHome";

const BottomTab = createBottomTabNavigator();

const TabNavigator = ({ navigation }: any) => {
  return (
    <BottomTab.Navigator>
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
        options={{ headerTitle: "CalculatorBMI", tabBarLabel: "CalculatorBMI" }}
        name="News"
        component={CalculatorBMI}
      />
    </BottomTab.Navigator>
  );
};

export default TabNavigator;
