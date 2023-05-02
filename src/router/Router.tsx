import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./TabNavigator";

const Router = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default Router;
