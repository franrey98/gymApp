import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuth } from "../../hooks/useAuth";

const Profile = () => {
  const { logout, getUserByID, dataUser } = useAuth();
  return (
    <View>
      <Text>Profile</Text>
      {dataUser ? (
        <>
          <Text>{dataUser?.user?.name}</Text>
          <Text>{dataUser?.user?.lastName}</Text>
          <Text>{dataUser?.user?.email}</Text>
        </>
      ) : (
        <Text>No hay info del usuario</Text>
      )}

      <TouchableOpacity onPress={getUserByID}>
        <Text>Traer user</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={logout}>
        <Text>Cerrar sesion</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
