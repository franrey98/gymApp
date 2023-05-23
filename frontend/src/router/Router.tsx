import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./TabNavigator";
import { ActivityIndicator } from "react-native";
import StackAuth from "./StackAuth";
import { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";

const Router = () => {
  const { isLoading, loginData } = useAuth();

  if (isLoading) {
    return <ActivityIndicator size={30} />;
  }

  return (
    <NavigationContainer>
      {loginData?.token ? <TabNavigator /> : <StackAuth />}
    </NavigationContainer>
  );
};

export default Router;
