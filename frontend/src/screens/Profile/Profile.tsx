import React from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useAuth } from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { firebase } from "../../services/services";

const Profile = () => {
  const { logout, getUserByID, dataUser } = useAuth();

  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result?.assets[0]);
    }
  };

  const uploadImageFB = async () => {
    setLoading(true);
    const response = await fetch(image?.uri);
    const blob = await response.blob();
    const filename = image?.fileName
      ? image?.fileName.substring(image?.uri?.lastIndexOf("/") + 1)
      : null;

    let ref = firebase.storage().ref().child(filename).put(blob);

    try {
      await ref;
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
    Alert.alert("Photo uploaded..!!");
    setImage(null);
  };

  useEffect(() => {
    getUserByID("");
  }, []);

  return (
    <View style={styles.container}>
      {dataUser ? (
        <>
          <TouchableOpacity onPress={pickImage}>
            {!dataUser?.image === "default.png" ? (
              <Image
                source={{
                  uri: "https://www.shutterstock.com/image-vector/default-avatar-profile-vector-user-260nw-1705357234.jpg",
                }}
                style={styles.image}
              />
            ) : (
              <Image source={{ uri: image?.uri }} style={styles.image} />
            )}
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={uploadImageFB}>
            <Text style={styles.buttonText}>Subir imagenes</Text>
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
