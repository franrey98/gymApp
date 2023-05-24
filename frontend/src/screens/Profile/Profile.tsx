import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useAuth } from "../../hooks/useAuth";
import { useEffect } from "react";

const Profile = () => {
  const { logout, getUserByID, dataUser } = useAuth();

  useEffect(() => {
    getUserByID("");
  }, []);

  const handleChangePhoto = () => {
    // Lógica para cambiar la foto
    // Aquí puedes abrir una modal, mostrar un selector de imágenes, etc.
    console.log("Cambiar foto");
  };

  return (
    <View style={styles.container}>
      {dataUser ? (
        <>
          <TouchableOpacity onPress={handleChangePhoto}>
            {dataUser?.image === "default.png" ? (
              <Image
                source={{
                  uri: "https://www.shutterstock.com/image-vector/default-avatar-profile-vector-user-260nw-1705357234.jpg",
                }}
                style={styles.image}
              />
            ) : (
              <Image source={{ uri: dataUser?.image }} style={styles.image} />
            )}
          </TouchableOpacity>

          <Text style={styles.text}>{dataUser?.name}</Text>
          <Text style={styles.text}>{dataUser?.lastName}</Text>
          <Text style={styles.text}>{dataUser?.email}</Text>
        </>
      ) : (
        <Text style={styles.text}>No hay información del usuario</Text>
      )}
      <TouchableOpacity style={styles.button} onPress={logout}>
        <Text style={styles.buttonText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  text: {
    marginBottom: 10,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});

export default Profile;
