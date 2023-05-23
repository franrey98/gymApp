import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuth } from "../../hooks/useAuth";

const Profile = () => {
  const { logout } = useAuth();
  return (
    <View>
      <Text>Profile</Text>
      <TouchableOpacity onPress={logout}>
        <Text>Cerrar sesion</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
