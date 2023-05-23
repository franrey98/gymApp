import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Register from "../auth/Register/Register";
import { colors } from "../constants/colors";
import Login from "../auth/Login/Login";

const Stack = createStackNavigator();

const StackAuth = () => {
  return (
    <Stack.Navigator initialRouteName="Register">
      <Stack.Screen
        options={{
          headerTitle: "Register".toUpperCase(),
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
        name="Register"
        component={Register}
      />
      <Stack.Screen
        options={{
          headerTitle: "Login".toUpperCase(),
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
        name="Login"
        component={Login}
      />
    </Stack.Navigator>
  );
};

export default StackAuth;
