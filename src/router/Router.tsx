import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./TabNavigator";
import MyDrawer from "./MyDrawer";

const Router = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default Router;
